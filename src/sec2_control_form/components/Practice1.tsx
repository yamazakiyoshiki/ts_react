import React, { useState } from "react";
import Profile from "../../components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Practice1 = () => {
  const [val, setVal] = useState("");
  const getInputVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };
  return (
    <>
      <input type="text" value={val} onChange={getInputVal} />
      <ul>
        {persons
          .filter((person) => person.name.includes(val))
          .map((person) => (
            <li key={person.name}>
              <Profile {...person} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Practice1;
