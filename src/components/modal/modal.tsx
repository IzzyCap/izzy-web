'use client'
import { useState } from 'react';
import classes from './modal.module.scss'

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({isOpen, setIsOpen, children }) => {
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <div className={`${classes.modalContainer} ${classes.open} ${isOpen ? '' : classes.close}`} onClick={closeModal}>
        <div className={classes.modalBackground}>
          <div className={classes.modal}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
