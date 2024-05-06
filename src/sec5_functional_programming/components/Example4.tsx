import React from "react";

let value = 0;

const Child = () => {
  value++;
  return <div>{value}</div>;
};

const ChildPure = ({ value }: { value: number }) => {
  return <div>{value}</div>;
};

const Example4 = () => {
  let value = 0;
  return (
    <>
      <Child />
      <Child />
      <Child />
      <ChildPure value={++value} />
    </>
  );
};

export default Example4;
