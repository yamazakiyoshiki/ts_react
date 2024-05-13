import React, { useCallback, useState } from "react";
import Child2 from "../referctor/Child2";

const Example2 = () => {
  console.log("Parent render");
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const clickHandler = () => setCountB((prev) => ++prev);
  return (
    <div>
      <div>
        <h3>親コンポーネント領域</h3>
      </div>
      <button onClick={() => setCountA((prev) => ++prev)}>ボタンA</button>
      <span>親のstateを更新</span>
      <div>ボタンAクリック回数:{countA}</div>
      <div>{/* <Child2 countB={countB} onClick={clickHandler} /> */}</div>
    </div>
  );
};

export default Example2;
