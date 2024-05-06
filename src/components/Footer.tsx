import { useUpdateTheme } from "../sec6_hooks/context/ThemeContext";

const Footer = () => {
  const setTheme = useUpdateTheme();

  console.log("footer");
  return (
    <footer>
      <div>フッター</div>
    </footer>
  );
};

export default Footer;
