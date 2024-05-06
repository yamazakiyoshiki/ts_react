import "./Example4.css";
import Header from "../../components/Header";
import Main from "../../components/Main";
import ThemeProvider from "../context/ThemeContext";
import Footer from "../../components/Footer";

const Example4 = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default Example4;
