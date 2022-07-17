import uploadImg from '../../../assets/upload.png';
import './index.scss';
const Modal = () => {
  const closeModal = () => {
    document.body.classList.remove('lock');
    document.querySelector('.modal').classList.remove('modal-active');
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
      <div className="modal-drop">
        <p className="modal-drop-info">
          <span>Drag here</span> your file or <span>Click here</span> to upload
        </p>
        <img src={uploadImg} alt="upload-here" className="modal-drop-bg" />
      </div>
      <p className="modal-text">No file selected</p>
      <button className="modal-btn-upload">UPLOAD PHOTO</button>
      <p className="modal-text modal-text--small">Thanks for the Upload - Cat found!</p>
    </div>
  );
};

export default Modal;
