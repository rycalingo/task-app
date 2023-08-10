import { useState, useCallback, useMemo, useEffect } from 'react';
import Logo from '../static/logo.svg';

interface HeaderProps {
  themeList: string[];
}

export const Header = ({ themeList }: HeaderProps) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 'dark'
  );

  const themeNames: string[] = useMemo(() => {
    return themeList.length ? themeList : ['light', 'dark'];
  }, [themeList]);

  const updateTheme = useCallback(
    (selectedTheme: string) => {
      document.documentElement.classList.remove(theme);
      document.documentElement.classList.add(selectedTheme);
      localStorage.setItem('theme', selectedTheme);
      setTheme(selectedTheme);
    },
    [theme]
  );

  const themeButtons = useMemo(() => {
    return themeNames.map((name, i) => {
      const isActive = theme === name ? 'activeTheme' : '';
      return (
        <span
          onClick={(e) => updateTheme(name)}
          key={i}
          className={`${name} ${isActive}`}
        ></span>
      );
    });
  }, [theme]);

  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt='TaskBuddy Logo' />
        <span>TaskBuddy</span>
      </div>
      <div className='themeSelector'>{themeButtons}</div>
    </header>
  );
};
