import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

import './modal.css';

interface ModalProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  toggleClose(): void;
}

export const Modal = ({ children, title, isOpen, toggleClose }: ModalProps) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div className='modalOverlay'>
            <div className='modalContainer'>
              <span className='close-button' onClick={() => toggleClose()}>
                <i className='bi bi-x-circle'></i>
              </span>
              <h2 className='modalTitle'>{title}</h2>
              <div className='modalContent'>{children}</div>
            </div>
          </div>,
          document.getElementById('modal') as HTMLElement
        )}
    </>
  );
};
