import React from "react";
import Counter2 from "../referctor/Counter2";
import store from "../store/store";
import { Provider } from "react-redux";

const Practice1 = () => {
  return (
    <Provider store={store}>
      <Counter2 />
    </Provider>
  );
};

export default Practice1;
