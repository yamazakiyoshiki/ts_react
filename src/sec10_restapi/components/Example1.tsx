import axios from "axios";
import React, { useEffect, useState } from "react";
import { User } from "../types/jsontypes";

const Example1 = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get<User[]>("http://localhost:3003/user");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetch data", err);
      }
    };
    getUser();
  }, []);
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>{user.age}</p>
            <p>{user.hobbies.join(",")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Example1;
