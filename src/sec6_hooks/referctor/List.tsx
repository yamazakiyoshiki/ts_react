import React from "react";
import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const List = () => {
  const todos = useTodo();
  return (
    <>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </>
  );
};

export default List;
