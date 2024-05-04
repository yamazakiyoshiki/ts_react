import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
import { TodoListType } from "../../../models/TodoType";

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

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const createTodo = (todo: TodoListType) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </>
  );
};

export default Todo;
