import React, { useState } from "react";

const Example1 = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const style = {
    width: 120,
    height: 60,
    display: "block",
    fontWeight: "bold",
    "border-radius": "50%",
    cursor: "pointer",
    border: "none",
    margin: "auto",
    background: isSelected ? "pink" : "",
  };
  return (
    <>
      <button onClick={clickHandler} style={style}>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example1;
