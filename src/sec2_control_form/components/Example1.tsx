import React from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example1 = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li key={animal}>{animal}</li>);
  }
  return (
    <div>
      <h3>配列の操作</h3>
      {/* <ul>{animalList}</ul> */}
      <ul>
        {animals.map((animal) => (
          <li key={animal}>Hello, {animal}</li>
        ))}
      </ul>
    </div>
  );
};

export default Example1;
