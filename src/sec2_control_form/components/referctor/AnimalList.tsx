import React from "react";
import AnimalItem from "./AnimalItem";

type AnimalListProps = {
  animals: string[];
};

const AnimalList = ({ animals }: AnimalListProps) => {
  if (animals.length === 0) {
    return <h3>アニマルが見つかりません。</h3>;
  }
  return (
    <>
      <ul>
        {animals.map((animal) => (
          <AnimalItem animal={animal} key={animal} />
        ))}
      </ul>
    </>
  );
};

export default AnimalList;
