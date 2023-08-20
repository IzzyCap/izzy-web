'use client'
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

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Prevent the click event from propagating to the background
    event.stopPropagation();
  };

  return (
    <div className={`${classes.modalContainer} ${classes.open} ${isOpen ? '' : classes.close}`}>
      <div className={classes.modalBackground} onClick={closeModal}>
        <div className={classes.modal} onClick={handleModalClick}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
