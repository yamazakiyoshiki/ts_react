import { useTheme } from "../sec6_hooks/context/ThemeContext";

const Main = () => {
  const [theme] = useTheme();
  console.log("Main");
  return (
    <main className={`content-${theme}`}>
      <h1>テーマの切り替え</h1>
    </main>
  );
};

export default Main;
