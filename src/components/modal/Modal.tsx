import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

import './modal.css';

interface ModalProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
}

export const Modal = ({ children, title, isOpen }: ModalProps) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div className='modalOverlay'>
            <div className='modalContainer'>
              <h2 className='modalTitle'>{title}</h2>
              <div className='modalContent'>{children}</div>
            </div>
          </div>,
          document.getElementById('modal') as HTMLElement
        )}
    </>
  );
};
