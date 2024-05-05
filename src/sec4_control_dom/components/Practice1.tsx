import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import Toast from "../../components/Toast";

const ToastPortal = ({ children }: { children: ReactNode }) => {
  const target = document.querySelector(".container.start") as HTMLDivElement;
  return createPortal(children, target);
};

const Practice1 = () => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div>
      <div className="container start"></div>
      <button
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>
      {toastOpen && (
        <ToastPortal>
          <Toast
            visible={toastOpen}
            handleCloseClick={() => setToastOpen(false)}
          />
        </ToastPortal>
      )}
    </div>
  );
};

export default Practice1;
