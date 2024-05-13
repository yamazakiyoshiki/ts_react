import React, { useState } from "react";
import Child from "../referctor/Child";

const Example1 = () => {
  console.log("Parent render");
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  return (
    <div>
      <div>
        <h3>親コンポーネント領域</h3>
      </div>
      <button onClick={() => setCountA((prev) => ++prev)}>ボタンA</button>
      <span>親のstateを更新</span>
      <div>ボタンAクリック回数:{countA}</div>
      <div>
        <button onClick={() => setCountB((prev) => ++prev)}>ボタンB</button>
        <Child countB={countB} />
      </div>
    </div>
  );
};

export default Example1;
