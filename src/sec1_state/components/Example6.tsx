import React, { useState } from "react";

type CountProps = {
  title: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Example6 = () => {
  const [toggle, setToggle] = useState(true);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const toggleComponent = () => setToggle((prev) => !prev);
  return (
    <div>
      <>
        <button onClick={toggleComponent}>toggle</button>
        {toggle ? (
          <Count key="A" title="A" count={countA} setCount={setCountA} />
        ) : (
          <Count key="B" title="B" count={countB} setCount={setCountB} />
        )}
      </>
    </div>
  );
};

export default Example6;

const Count = ({ title, count, setCount }: CountProps) => {
  const countUp = () => setCount((prev) => prev + 1);
  const countDown = () => setCount((prev) => prev - 1);
  return (
    <>
      <h3>
        {title}: {count}
      </h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};
