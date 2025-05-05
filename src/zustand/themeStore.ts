import { create } from 'zustand'

type ThemeStore = {
    theme: string
    setTheme: (theme: string) => void
}

export const useTheme = create<ThemeStore>((set) => ({
    theme: localStorage.getItem('theme') || 'light',
    setTheme: (theme: string) => set({ theme }),
}))
