import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const defaultTheme = {
  colors: {
    mainText: '#212121',    // Default text color
    accent: '#FC842D',      // Primary accent color
    background: '#FFFFFF',  // Default background
    christmasRed: '#D6001C' // Christmas theme color
  },
  isChristmas: false
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  
  // Sync with body class
  useEffect(() => {
    const body = document.body;
    if (theme.isChristmas) {
      body.classList.add('christmas');
    } else {
      body.classList.remove('christmas');
    }
  }, [theme.isChristmas]);

  // Toggle between normal and christmas themes
  const toggleTheme = () => {
    setTheme(prev => ({
      ...prev,
      isChristmas: !prev.isChristmas,
      colors: {
        ...prev.colors,
        accent: !prev.isChristmas ? '#D6001C' : '#FC842D'
      }
    }));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isChristmas: theme.isChristmas
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};