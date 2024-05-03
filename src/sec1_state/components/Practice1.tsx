import React, { useState } from "react";

const Practice1 = () => {
  const orderObj = { item: "apple", count: 10 };
  const [order, setOrder] = useState(orderObj);

  const changeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder((prev) => ({ ...prev, item: e.target.value }));
  };
  const countUp = () =>
    setOrder((prev) => ({ ...prev, count: prev.count + 1 }));
  const countDown = () =>
    setOrder((prev) => ({ ...prev, count: prev.count - 1 }));
  return (
    <div>
      <h2>Item:{order.item}</h2>
      <h2>Count:{order.count}</h2>
      <input type="text" onChange={changeItem} />
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
};

export default Practice1;
