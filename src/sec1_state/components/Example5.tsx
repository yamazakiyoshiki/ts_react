import React, { useState } from "react";

const Example5 = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);

  const shuffle = () => {
    const newNums = [...nums];
    const value = newNums.pop();
    newNums.unshift(value!);
    setNums(newNums);
  };
  return (
    <div>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </div>
  );
};

export default Example5;
