import React, { useState } from "react";

const animals = ["Dog", "Cat", null, "Rat"];

const Example3 = () => {
  const [filterVals, setFilterVals] = useState("");

  const filterVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterVals(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={filterVal} />
      <ul>
        {animals
          .filter((animal) => animal?.includes(filterVals))
          .map((animal) => {
            return (
              // <li key={animal}>{animal + (animal === "Dog" ? "★" : "")}</li>
              <li key={animal}>
                {animal}
                {animal === "Dog" && "★"}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Example3;
