import React, { useState } from "react";

const Example5 = () => {
  const [fruit, setFruit] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFruit(e.target.value);
  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];
  return (
    <div>
      <label>
        <input
          type="radio"
          value="Apple"
          checked={fruit === "Apple"}
          onChange={onChange}
        />
        Apple
      </label>
      <label>
        <input
          type="radio"
          value="Banana"
          checked={fruit === "Banana"}
          onChange={onChange}
        />
        Banana
      </label>
      <label>
        <input
          type="radio"
          value="Cherry"
          checked={fruit === "Cherry"}
          onChange={onChange}
        />
        Cherry
      </label>
      {RADIO_COLLECTION.map((value) => (
        <label key={value}>
          <input
            type="radio"
            value={value}
            checked={fruit === value}
            onChange={onChange}
          />
          {value}
        </label>
      ))}
      <h3>私は{fruit}が食べたい</h3>
    </div>
  );
};

export default Example5;
