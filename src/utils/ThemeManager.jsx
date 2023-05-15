import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setThemeDark();
    } else {
      setThemeLight();
    }
  };

  const setThemeDark = () => {
    setTheme('dark');
  };

  const setThemeLight = () => {
    setTheme('light');
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setThemeLight, setThemeDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
