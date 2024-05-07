import React from "react";
import { useCalcDispatch } from "../context/CalcContext";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const Select = () => {
  const dispatch = useCalcDispatch();

  const calculate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: e.target.value });
  };
  return (
    <select name="type" onChange={calculate}>
      {CALC_OPTIONS.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default Select;
