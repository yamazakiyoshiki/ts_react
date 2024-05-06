import React from "react";

const Example3 = () => {
  const num = { val: 2 };
  const double = (num: { val: number }) => {
    const newNum: { val: number | null } = { val: 0 };
    newNum.val = num.val * 2;
    return newNum;
  };
  const newNum = double(num);
  console.log("newNum:", newNum, "num:", num);
  console.log(num === newNum);
  return <></>;
};

export default Example3;
