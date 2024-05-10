import React from "react";
import { useCounter2Dispatch, useCounter2Selector } from "../store/hooks";
import { add, minus } from "../store/modules/counter2";

const Counter2 = () => {
  const state = useCounter2Selector((state) => state.counter2);
  return (
    <div>
      {state.count}
      <Counter2Button type="+" payload={1} action={add} />
      <Counter2Button type="-" payload={1} action={minus} />
      <Counter2Button type="+" payload={10} action={add} />
      <Counter2Button type="-" payload={10} action={minus} />
    </div>
  );
};

type Counter2ButtonProps = {
  type: string;
  payload: number;
  action: Function;
};

const Counter2Button = ({ type, payload, action }: Counter2ButtonProps) => {
  const dispatch = useCounter2Dispatch();

  const calcHandler = () => dispatch(action(payload));
  return (
    <>
      <button onClick={calcHandler}>
        {type}
        {payload}
      </button>
    </>
  );
};

export default Counter2;
