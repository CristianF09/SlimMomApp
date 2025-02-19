import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themes';
import ThemeToggle from './ThemeToggle';

const ThemeProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const themeMode = useMemo(() => (theme === 'light' ? lightTheme : darkTheme), [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;