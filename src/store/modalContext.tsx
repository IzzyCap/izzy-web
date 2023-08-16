'use client'
import Modal from '@/components/modal/modal';
import { createContext, useState } from 'react';

interface ModalStoreProviderProps {
  children: React.ReactNode;
}

interface ModalContextType {
  openModal: (modalChildren: React.ReactNode) => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
});

export const ModalContextProvider: React.FC<ModalStoreProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalChildren, setModalChildren] = useState<React.ReactNode>(undefined);

  const openModal = (modalChildren: React.ReactNode) => {
    setModalChildren(modalChildren);
    setIsOpen(true);
  }
  
  const context = {
    openModal,
  };

  return (
    <ModalContext.Provider value={context}>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {modalChildren}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
