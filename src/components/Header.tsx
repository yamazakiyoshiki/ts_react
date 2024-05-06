import { useTheme, useUpdateTheme } from "../sec6_hooks/context/ThemeContext";

const Header = () => {
  const theme = useTheme();
  const setTheme = useUpdateTheme();

  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

  const THEMES = ["light", "dark", "red"];

  console.log("Header");

  return (
    <header className={`content-${theme}`}>
      {THEMES.map((_theme) => {
        return (
          <label key={_theme}>
            <input
              type="radio"
              value={_theme}
              onChange={changeTheme}
              checked={_theme === theme}
            />
          </label>
        );
      })}
    </header>
  );
};

export default Header;
