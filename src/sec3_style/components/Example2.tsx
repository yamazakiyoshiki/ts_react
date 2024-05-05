import { useState } from "react";
import styles from "../style/Example2.module.css";

console.log(styles);

const Example2 = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <button
        className={`${styles.btn} ${isSelected ? styles.selected : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <button className="btn">サブボタン</button>
      <div className="">{isSelected && "クリックされました。"}</div>
    </>
  );
};

export default Example2;
