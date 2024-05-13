import React, { useCallback, useState } from "react";

const Practice1 = () => {
  console.log("component render");
  const [count, setCount] = useState(0);
  const [dummy, setDummy] = useState(0);

  const dummyHandler = () => {
    console.log("dummy called");
    setDummy((prev) => dummy);
  };

  const incrementHandler = useCallback(() => {
    console.log("callback called");
    setCount((prev) => prev + 1);
  }, []);
  return (
    <>
      <button onClick={dummyHandler}>ノーマルボタン</button>
      <button onClick={incrementHandler}>インクリメントボタン</button>
      <div>
        <span>合計:{count}</span>
      </div>
    </>
  );
};

export default Practice1;
