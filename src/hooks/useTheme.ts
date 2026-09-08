import { useState, useEffect } from 'react';
import { applyThemeColors } from '../constants/colors';

type Theme = 'light' | 'dark';

export function useTheme(): [Theme, () => void] {
  const getInitial = (): Theme => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // Apply theme colors directly from constants/colors.ts
    applyThemeColors(theme);
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return [theme, toggle];
}
