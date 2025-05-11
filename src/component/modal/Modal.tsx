import { useEffect, useRef } from 'react';
import {
  CloseButton,
  ModalContentContainer,
  ModalOverlay,
} from '../../styles/Modal.style.ts';
import { GlobalStyle } from '../../styles/createGlobalStyle.ts';
import { useModalControlStore } from '../../store/modalControlStore.hook.tsx';

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  showClose: boolean;
}

const Modal = ({ children, isOpen, showClose }: ModalProps) => {
  const handleClose = useModalControlStore((state) => state.handleClose);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GlobalStyle for body overflow is handled by <GlobalModalStyle isOpen={isOpen} />
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, handleClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // if (disableOverlayClose) return;
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target as Node)
    ) {
      handleClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <GlobalStyle isOpen={isOpen} />
      <ModalOverlay
        isOpen={isOpen}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
      >
        <ModalContentContainer
          ref={modalContentRef}
          tabIndex={-1}
          aria-labelledby="modal-title"
        >
          {showClose && (
            <CloseButton onClick={handleClose} aria-label="Close modal">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </CloseButton>
          )}

          {children}
        </ModalContentContainer>
      </ModalOverlay>
    </>
  );
};

export default Modal;
