import React, { useState } from "react";

type ChildProps = {
  state: { value: number };
  setState: React.Dispatch<React.SetStateAction<{ value: number }>>;
};

const Child = ({ state, setState }: ChildProps) => {
  // setState({ value: 1 });
  const increment = () => {
    //   setState((prev) => {
    //     const newState = { value: prev.value + 1 };
    //     return newState;
    //   });
    const newState = setState((prev) => ({ value: prev.value + 1 }));
    return newState;
  };
  return (
    <>
      <span>{state.value}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

const Example6 = () => {
  const [state, setState] = useState({ value: 0 });

  return (
    <>
      <div>
        <Child state={state} setState={setState} />
      </div>
    </>
  );
};

export default Example6;
