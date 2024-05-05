import React, { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../../components/Modal";

type ModalPortalProps = {
  children: ReactNode;
};

const ModalPortal = ({ children }: ModalPortalProps) => {
  const target = document.querySelector(".container.start") as HTMLDivElement;
  return createPortal(children, target);
};
const Example = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div onClick={() => console.log("空のdiv")}>
      <div
        className="container start"
        onClick={() => console.log("container")}
      ></div>

      <button
        type="button"
        onClick={() => setModalOpen(true)}
        disabled={modalOpen}
      >
        モーダルを表示する
      </button>
      {modalOpen && (
        <ModalPortal>
          <Modal handleCloseClick={() => setModalOpen(false)} />
        </ModalPortal>
      )}
    </div>
  );
};

export default Example;
