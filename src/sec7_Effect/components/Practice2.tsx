import React from "react";
import useCount from "../referctor/useCount";

const Practice2 = () => {
  const { count, countUp } = useCount();
  return (
    <>
      <p>Counts:{count}</p>
      <button onClick={countUp}>Count Up!</button>
    </>
  );
};

export default Practice2;
