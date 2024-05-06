import Counter from "../../components/Counter";
import CounterProvider from "../context/CounterContext";

const Example5 = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default Example5;
