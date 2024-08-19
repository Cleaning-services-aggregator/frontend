import * as React from "react";
import { Portal } from "../portal";

import styles from "./index.module.css";

type ModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
};

export function Modal({ isOpen, handleClose, children }: ModalProps) {
  React.useEffect(() => {
    const closeOnEscapeKey = (e: any) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <Portal wrapperId={"modal-container"}>
      <div className={styles.modal__backdrop} onClick={handleClose}>
        <div
          className={styles.modal__container}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}
