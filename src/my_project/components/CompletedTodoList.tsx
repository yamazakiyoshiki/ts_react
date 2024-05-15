import React from "react";
import { useTodo } from "../context/TodoContext";

const CompletedTodoList = () => {
  const todos = useTodo();
  return (
    <>
      <h1>完了したタスク</h1>
      <ul>
        {todos?.todos.map((todo) => (
          <div key={todo.id}>{todo.completed && <li>{todo.content}</li>}</div>
        ))}
      </ul>
    </>
  );
};

export default CompletedTodoList;
