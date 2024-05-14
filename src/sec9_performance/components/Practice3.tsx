import React, { useState } from "react";

type ListType = {
  list: {
    id: number;
    name: string;
  }[];
};

const userList = [
  {
    id: Math.floor(Math.random() * 10 ** 4),
    name: "Tom",
  },
  {
    id: Math.floor(Math.random() * 10 ** 4),
    name: "Bob",
  },
  {
    id: Math.floor(Math.random() * 10 ** 4),
    name: "Rem",
  },
];

const Practice3 = () => {
  const [list, setList] = useState(userList);
  const [username, setUserName] = useState("");

  const getUser = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const addUser = () => {
    const newList = [...list];
    newList.push({
      id: Math.floor(Math.random() * 10 ** 4),
      name: username,
    });
    setList(newList);
    setUserName("");
  };
  return (
    <>
      <div>
        <UserList list={list} />
      </div>
      <div>
        ユーザー数: <UserCount list={list} />
      </div>
      <div>
        <input type="text" value={username} onChange={getUser} />
        <button onClick={addUser}>ユーザーを追加</button>
      </div>
    </>
  );
};

const UserList = ({ list }: ListType) => {
  return (
    <div>
      {list.map((user) => {
        return (
          <div key={user.id}>
            <h1>ユーザー名: {user.name}</h1>
            <h2>ユーザーID: {user.id}</h2>
          </div>
        );
      })}
    </div>
  );
};

const UserCount = React.memo(({ list }: ListType) => {
  return <h1>{list.length}</h1>;
});

export default Practice3;
