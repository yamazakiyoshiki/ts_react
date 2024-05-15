import React from "react";
import TodoProvider from "../context/TodoContext";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import CompletedTodoList from "../components/CompletedTodoList";

const Project1 = () => {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
      <CompletedTodoList />
    </TodoProvider>
  );
};

export default Project1;
