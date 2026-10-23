import { create } from 'zustand'

type UiState = {
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
  toggleMenu: () => void
}

export const useUi = create<UiState>((set) => ({
  menuOpen: false,
  setMenuOpen: (v) => set({ menuOpen: v }),
  toggleMenu: () => set((s) => ({ menuOpen: !s.menuOpen })),
}))
