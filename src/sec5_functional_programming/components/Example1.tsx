import React from "react";

const numObj = {
  nums: [1, 2, 3],
  sum() {
    const nums = this.nums;
    let sumValue = 0;
    for (let i = 0; i < nums.length; i++) {
      sumValue += nums[i];
    }
    return sumValue;
  },
};

const nums = [1, 2, 3];
const sum = (arry: number[]) => {
  // const nums = arry;
  // let sumValue = 0;
  // nums.forEach(num => sumValue += num);
  const sumValue = arry.reduce((accu, curr) => accu + curr, 0);
  return sumValue;
};

const Example1 = () => {
  return (
    <>
      <div>オブジェクト指向:{numObj.sum()}</div>
      <div>関数型:{sum(nums)}</div>
    </>
  );
};

export default Example1;
