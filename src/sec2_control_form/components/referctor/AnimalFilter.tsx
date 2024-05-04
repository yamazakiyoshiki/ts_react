import React from "react";

type AnimalFilterProps = {
  filterState: [string, React.Dispatch<React.SetStateAction<string>>];
  // filterVals: string;
  // setFilterVals: React.Dispatch<React.SetStateAction<string>>;
  // filterVal: React.ChangeEventHandler;
};

const AnimalFilter = ({ filterState }: AnimalFilterProps) => {
  const [filterVals, setFilterVals] = filterState;
  const filterVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterVals(e.target.value);
  };
  return (
    <>
      <input type="text" value={filterVals} onChange={filterVal} />
    </>
  );
};

export default AnimalFilter;
