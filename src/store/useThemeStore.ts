import { create } from 'zustand'

type Theme = 'light' | 'dark'

type ThemeState = {
  theme: Theme
  updateTheme: (newTheme: Theme) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  updateTheme: (newTheme) =>
    set({
      theme: newTheme,
    }),
}))
