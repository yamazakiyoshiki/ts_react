import React, { useState } from "react";

const fruitsCartList = [
  {
    label: "Apple",
    value: 100,
    checked: false,
  },
  {
    label: "Banana",
    value: 200,
    checked: false,
  },
  {
    label: "Cherry",
    value: 300,
    checked: false,
  },
];

const Example6 = () => {
  const [fruits, setFruits] = useState(fruitsCartList);
  const [sum, setSum] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFruits = fruits.map((fruit) => {
      if (e.target.value === fruit.label) {
        return { ...fruit, checked: !fruit.checked };
      }
      return fruit;
    });
    setFruits(newFruits);

    let sumVal = newFruits
      .filter((fruit) => fruit.checked)
      .reduce((sumVal, fruit) => (sumVal += fruit.value), 0);
    setSum(sumVal);
  };
  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.label}>
            <input
              id={fruit.label}
              type="checkbox"
              value={fruit.label}
              checked={fruit.checked}
              onChange={handleChange}
            />
            <label htmlFor={fruit.label}>
              {fruit.label}:{fruit.value}
            </label>
          </div>
        );
      })}
      <div>合計: {sum}</div>
    </div>
  );
};

export default Example6;
