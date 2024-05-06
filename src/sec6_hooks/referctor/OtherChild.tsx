import React, { useContext } from "react";
import { MyContext } from "../components/Example3";

const OtherChild = () => {
  const [, setValue] = useContext(MyContext);
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue((prev) => prev + 1);
  };

  return (
    <div>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
    </div>
  );
};

export default OtherChild;
