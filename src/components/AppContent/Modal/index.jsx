import uploadImg from '../../../assets/upload.png';
import './index.scss';
const Modal = () => {
  return (
    <div className="modal">
      <span className="modal-btn-close icon-close"></span>
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
