// Define keyframes for modal animation
import { keyframes, styled } from 'styled-components';

const modalFadeInScale = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.90);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

// Styled component for the modal overlay
export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  ${(props: { isOpen?: boolean }) =>
    props.isOpen &&
    `
    opacity: 1;
  `}
`;

// Styled component for the modal content container
export const ModalContentContainer = styled.div`
  background-color: white;
  border-radius: 12px; /* Corresponds to rounded-xl */
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04); /* Corresponds to shadow-2xl */
  padding: 20px; /* Corresponds to p-1 sm:p-2 - simplified to a single value, adjust if needed */
  position: fixed; /* Changed from relative to fixed for centering with transform */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the modal */
  width: 90%; /* Corresponds to w-full with margin */
  max-width: 512px; /* Corresponds to max-w-lg */
  margin: 16px; /* Corresponds to m-4 */
  animation: ${modalFadeInScale} 0.3s ease-out forwards;
  outline: none; /* Remove default focus outline if any */
  max-height: 90vh; /* Ensure modal content can scroll if too tall */
  overflow-y: auto; /* Allow scrolling for content if it overflows */
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 640px) {
    /* sm breakpoint */
    padding: 40px;
    gap: 20px;
  }
`;

// Styled component for the close button
export const CloseButton = styled.button`
  position: absolute;
  top: 12px; /* Corresponds to top-3 */
  right: 12px; /* Corresponds to right-3 */
  color: #9ca3af; /* slate-400 */
  padding: 4px; /* p-1 */
  border-radius: 9999px; /* rounded-full */
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 150ms ease-in-out;

  &:hover {
    color: #4b5563; /* slate-600 */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #38bdf8; /* ring-2 focus:ring-sky-500 */
  }

  svg {
    width: 24px; /* w-6 */
    height: 24px; /* h-6 */
  }
`;
