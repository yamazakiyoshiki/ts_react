import React, { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example2 = () => {
  const [filterVals, setFilterVals] = useState("");

  const filterVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterVals(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={filterVal} />
      <ul>
        {animals
          .filter((animal) => animal.includes(filterVals))
          .map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
      </ul>
    </div>
  );
};

export default Example2;
