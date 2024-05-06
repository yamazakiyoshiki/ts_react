import React from "react";

const Example2 = () => {
  const val1 = 2;
  const val2 = 3;
  let result;
  const add = (num1: number, num2: number) => {
    result = val1 + val2;
    // return result;
    return num1 + num2;
  };
  return (
    <>
      <div>純粋関数:{add(val1, val2)}</div>
    </>
  );
};

export default Example2;
