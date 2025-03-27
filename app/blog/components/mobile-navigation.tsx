"use client";

import { createContext, useContext } from "react";
import { create } from "zustand";

const IsInsideMobileNavigationContext = createContext(false);

export function useIsInsideMobileNavigation() {
  return useContext(IsInsideMobileNavigationContext);
}

export const useMobileNavigationStore = create<{
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}>()((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
