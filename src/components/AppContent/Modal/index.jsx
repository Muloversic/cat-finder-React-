import { useState } from 'react';
import uploadImg from '../../../assets/upload.png';
import { postImage } from '../../GetAPI';
import './index.scss';
const Modal = (subId) => {
  const [drag, setDrag] = useState(false);
  const [fileName, setFileName] = useState('');
  const [dataImage, setDataImage] = useState('');
  const closeModal = () => {
    document.body.classList.remove('lock');
    document.querySelector('.modal').classList.remove('modal-active');
  };

  const [userImage, setUserImage] = useState('');
  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (event) => {
    event.preventDefault();
    const text = event.dataTransfer.getData('text');
    if (text) {
      const image = <img src={text} className="modal-download-img" alt="user-photo" />;
      setUserImage(image);
    }

    if (!text) {
      const files = event.dataTransfer.files;
      setFileName(files[0].name);
      [].map.call(files, (file) => {
        if (file.type.match(/^image/)) {
          let reader = new FileReader();
          reader.onload = (file) => {
            const image = <img src={file.target.result} className="modal-download-img" alt="user-photo" />;
            setUserImage(image);
            setDataImage(files[0]);
          };

          reader.readAsDataURL(file);
        }
      });
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', dataImage);
    (async () => await postImage(formData))();
  };

  const handleFile = (e) => {
    setDataImage(e.target.files[0]);
  };

  return (
    <div className="modal">
      <span className="modal-btn-close icon-close" onClick={closeModal}></span>
      <div className="modal-header">
        <h2 className="modal-title">Upload a .jpg or .png Cat Image</h2>
        <p className="modal-text">
          Any uploads must comply with the <span>upload guidelines</span> or face deletion.
        </p>
      </div>
      <div
        className="modal-drop"
        onDragStart={(e) => dragStartHandler(e)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragOver={(e) => dragStartHandler(e)}
        onDrop={(e) => onDropHandler(e)}
      >
        <input type="file" className="modal-input" onChange={handleFile} />
        {userImage || (
          <p className="modal-drop-info">
            <span>Drag here</span> your file or <span>Click here</span> to upload
          </p>
        )}
        <img src={uploadImg} alt="upload-here" className="modal-drop-bg" />
      </div>
      <p className="modal-text">{fileName || 'No file selected'} </p>
      {userImage ? (
        <button className="modal-btn-upload" onClick={handleUpload}>
          UPLOAD PHOTO
        </button>
      ) : null}
      <p className="modal-text modal-text--small">Thanks for the Upload - Cat found!</p>
    </div>
  );
};

export default Modal;
