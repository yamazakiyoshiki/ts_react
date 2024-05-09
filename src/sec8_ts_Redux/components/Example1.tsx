import { Provider } from "react-redux";
// import CounterProvider from "../context/CounterContext";
import Counter from "../referctor/Counter";
import store from "../store";
import "../referctor/immer";

const Example1 = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Example1;
