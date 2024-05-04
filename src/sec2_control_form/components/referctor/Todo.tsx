import React, { useState } from "react";
import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todoList = [
    {
      id: 1,
      content: "店を予約する",
    },
    {
      id: 2,
      content: "買い物に行く",
    },
    {
      id: 3,
      content: "郵便を出す",
    },
  ];

  const [todos, setTodos] = useState(todoList);
  return (
    <>
      <List todos={todos} setTodos={setTodos} />
      <Form todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Todo;
