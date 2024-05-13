import React, { memo } from "react";

type ChildProps = {
  countB: number;
};

function areEqual(prevProps: ChildProps, nextProps: ChildProps) {
  if (prevProps.countB !== nextProps.countB) {
    return false;
  } else {
    return true;
  }
}

const ChildMemo = memo(({ countB }: ChildProps) => {
  console.log("%cChild render", "color: red;");
  return (
    <div>
      <h2>子コンポーネト領域</h2>
      <span>ボタンBクリック回数:{countB}</span>
    </div>
  );
}, areEqual);

export default ChildMemo;
