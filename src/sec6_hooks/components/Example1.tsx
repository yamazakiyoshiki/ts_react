import React, { useReducer, useState } from "react";

type Prev = number;
type Action = {
  type: "+" | "-";
  payload: number;
};

const reducer = (prev: Prev, { type, payload }: Action) => {
  switch (type) {
    case "+":
      return prev + payload;
    case "-":
      return prev - payload;
    default:
      throw new Error("不正な値です。");
  }
};

const Example1 = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer(reducer, 0);

  const countUp = () => setState((prev) => ++prev);
  const rCountUp = () => dispatch({ type: "+", payload: 2 });
  const rCountDown = () => dispatch({ type: "-", payload: 3 });
  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rCountUp}>+</button>
        <button onClick={rCountDown}>-</button>
      </div>
    </>
  );
};

export default Example1;
