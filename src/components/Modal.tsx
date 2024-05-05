import "./Modal.css";

type ModalProps = {
  handleCloseClick: () => void;
};

const Modal = ({ handleCloseClick }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <p>モーダル</p>
        <button type="button" onClick={handleCloseClick}>
          閉じる
        </button>
      </div>
    </div>
  );
};

export default Modal;
