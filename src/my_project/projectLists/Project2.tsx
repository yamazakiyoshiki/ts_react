import React from "react";
import useLocalStorage from "../components/UseLocalStorage";

const Project2 = () => {
  const [name, setName] = useLocalStorage("name", "Default Name");
  return (
    <>
      <h1>名前:{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default Project2;
