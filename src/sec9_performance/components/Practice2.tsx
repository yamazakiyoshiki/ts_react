import React, { useMemo, useState } from "react";

const initStateArry = [1, 2, 3, 4, 5, 6, 35, 76, 32];

const Practice2 = () => {
  console.log("render");
  const [numArry, setNumArry] = useState(initStateArry);

  const addNumHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("useState called");
    const newNumArry = [...numArry, parseInt(e.target.value) || 0];
    setNumArry(newNumArry);
  };

  const maxNum = useMemo(() => {
    console.log("useMemo called");
    return numArry.reduce((acc, curr) => (acc > curr ? acc : curr), numArry[0]);
  }, [numArry]);
  return (
    <>
      <input type="number" onChange={addNumHandler} />
      <div>
        <h3>合計値: {maxNum}</h3>
      </div>
    </>
  );
};

export default Practice2;
