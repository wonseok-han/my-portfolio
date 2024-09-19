/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useState } from 'react';

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(
    document.querySelector('html').classList.contains('dark')
  );

  const toggleDarkMode = () => {
    const htmlEl = document.querySelector('html');
    if (!htmlEl) return;

    const isDarkMode = htmlEl.classList.contains('dark');
    if (isDarkMode) {
      htmlEl.classList.remove('dark');
    } else {
      htmlEl.classList.add('dark');
    }

    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
