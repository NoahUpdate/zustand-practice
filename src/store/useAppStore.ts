import { create } from 'zustand'

interface IAppStore {
  cant: number
  increase: () => void
  decrease: () => void
  updateCant: (newCant: number) => void
}

export const useAppStore = create<IAppStore>((set) => ({
  cant: 0,
  increase: () => set((state) => ({ cant: state.cant + 1 })),
  decrease: () => set((state) => ({ cant: state.cant - 1 })),
  updateCant: (newCant) => set({ cant: newCant }),
}))
