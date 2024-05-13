import { useMemo } from "react";

type ChildProps = {
  countB: number;
  onClick: () => void;
};

const ChildMemo = ({ countB, onClick }: ChildProps) => {
  console.log("%cChild render", "color: red;");
  return useMemo(() => {
    <div>
      <h2>子コンポーネト領域</h2>
      <button onClick={onClick}>ボタンB</button>
      <span>ボタンBクリック回数:{countB}</span>
    </div>;
  }, [countB, onClick]);
};

export default ChildMemo;
