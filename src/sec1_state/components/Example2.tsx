import React, { useState } from "react";

const Example2 = () => {
  const [countA, setCountA] = useState<number>(0);
  const [countB, setCountB] = useState<number>(10);
  const [countC, setCountC] = useState<number>(100);

  const countAUpHandler = () => setCountA((prev) => prev + 1);
  const countBUpHandler = () => setCountB((prev) => prev + 5);
  const countCUpHandler = () => setCountC((prev) => prev + 10);
  return (
    <div>
      <p>ボタンを{countA}回押しました!</p>
      <button onClick={countAUpHandler}>ボタンA</button>
      <p>ボタンを{countB}回押しました!</p>
      <button onClick={countBUpHandler}>ボタンB</button>
      <p>ボタンを{countC}回押しました!</p>
      <button onClick={countCUpHandler}>ボタンC</button>
    </div>
  );
};

export default Example2;
