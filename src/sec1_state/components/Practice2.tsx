import React, { useState } from "react";

type CountResultProps = {
  title: string;
  state: number;
};

type CountUpdateProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Practice2 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountResult title="カウント" state={count} />
      <CountUpdate setCount={setCount} />
    </div>
  );
};

const CountResult = ({ title, state }: CountResultProps) => {
  return (
    <>
      <h1>
        {title}:{state}
      </h1>
    </>
  );
};

const CountUpdate = ({ setCount }: CountUpdateProps) => {
  const countUp = () => setCount((prev) => prev + 1);
  const countDown = () => setCount((prev) => prev - 1);
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Practice2;
