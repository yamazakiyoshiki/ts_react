import React, { useState } from "react";

type PersonObjType = {
  name: string;
  age: number | null;
};

const Example4 = () => {
  const personObj = { name: "", age: null };
  const [obj, setObj] = useState<PersonObjType>(personObj);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setObj({ ...obj, name: e.target.value });
  };

  const changeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setObj({
      ...obj,
      age: e.target.value ? Number(e.target.value) : 0,
    });
  };

  const resetObj = () => setObj({ name: "", age: null });
  return (
    <div>
      <h1>Name:{obj.name}</h1>
      <h1>Age:{obj.age}</h1>
      <input type="text" value={obj.name} onChange={changeName} />
      <input type="number" value={obj.age ?? ""} onChange={changeAge} />
      <div>
        <button onClick={resetObj}>リセット</button>
      </div>
    </div>
  );
};

export default Example4;
