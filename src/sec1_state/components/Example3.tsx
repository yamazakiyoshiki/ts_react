import React, { useState } from "react";

const Example3 = () => {
  const [count, setCount] = useState<number>(0);

  const countUpHandler = () => setCount((prev) => ++prev);
  const countDownHandler = () => setCount((prev) => --prev);
  return (
    <div>
      <p>現在のカウント数:{count}</p>
      <button onClick={countUpHandler}>+</button>
      <button onClick={countDownHandler}>-</button>
    </div>
  );
};

export default Example3;
