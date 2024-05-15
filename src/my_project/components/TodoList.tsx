import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../context/TodoContext";

const TodoList = () => {
  const todos = useTodo();
  return (
    <>
      <h1>未完了のタスク</h1>
      {todos?.todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export default TodoList;
