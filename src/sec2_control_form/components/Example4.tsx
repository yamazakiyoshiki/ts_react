import React, { useState } from "react";
import AnimalList from "./referctor/AnimalList";
import AnimalFilter from "./referctor/AnimalFilter";

const animals = ["Dog", "Cat", "Rat"];

const Example4 = () => {
  const [filterVals, setFilterVals] = useState("");

  const filteredAnimals = animals.filter((animal) =>
    animal.includes(filterVals)
  );

  return (
    <div>
      <AnimalFilter filterState={[filterVals, setFilterVals]} />
      <AnimalList animals={filteredAnimals} />
    </div>
  );
};

export default Example4;
