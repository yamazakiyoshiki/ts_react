import React from "react";
import { useCalc, useCalcDispatch } from "../context/CalcContext";

type InputProps = {
  name: string;
};

const Input = ({ name }: InputProps) => {
  const state = useCalc();
  const dispatch = useCalcDispatch();

  const numChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: parseInt(e.target.value) },
    });
  };
  return (
    <div>
      {name}:
      <input
        type="number"
        name={name}
        value={name === "a" ? state.a : state.b}
        onChange={numChangeHandler}
      />
    </div>
  );
};

export default Input;
