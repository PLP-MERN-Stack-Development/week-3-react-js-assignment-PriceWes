import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </Button>
  );
};

export default ThemeSwitcher;