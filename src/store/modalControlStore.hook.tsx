import { create } from 'zustand/react';

type ModalKey = 'login' | 'register' | 'cartSuccess' | null;

interface ModalControlState {
  activeModal: ModalKey;
  handleOpen: (key: ModalKey) => void;
  handleClose: () => void;
}

export const useModalControlStore = create<ModalControlState>()((set) => ({
  activeModal: null,
  handleOpen: (key: ModalKey) =>
    set((state) => {
      return {
        ...state,
        activeModal: key,
      };
    }),
  handleClose: () => set((state) => ({ ...state, activeModal: null })),
}));
