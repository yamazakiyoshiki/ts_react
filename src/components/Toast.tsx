import "./Toast.css";

type ToastProps = {
  visible: boolean;
  handleCloseClick: () => void;
};

const Toast = ({ visible, handleCloseClick }: ToastProps) => {
  const toastClassName = visible ? "toast is-visible" : "toast";
  return (
    <div className={toastClassName}>
      <div className="toast__content">
        <p>トースト</p>
        <button
          type="button"
          className="toast__button"
          onClick={handleCloseClick}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
