import React, { useState } from "react";

const Example1 = () => {
  const [state, setState] = useState(0);

  const countUp = () => setState((prev) => ++prev);
  return (
    <>
      <h3>{state}</h3>
      <button onClick={countUp}>+</button>
    </>
  );
};

export default Example1;
