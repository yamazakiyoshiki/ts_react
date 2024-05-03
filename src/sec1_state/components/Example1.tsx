import React from "react";

const Example1 = () => {
  const clickHandler = () => {
    alert("ボタンがクリックされました。");
  };
  const clickHandler2 = () => {
    console.log("ボタンがクリックされました。");
  };
  return (
    <div>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </div>
  );
};

export default Example1;
