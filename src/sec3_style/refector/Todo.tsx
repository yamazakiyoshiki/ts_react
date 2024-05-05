import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
import { TodoListType } from "../../models/TodoType";
import { Heading, VStack } from "@chakra-ui/react";

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
    <VStack p="10" spacing="10">
      <Heading color="blue.200" fontSize="5xl">
        Reminder
      </Heading>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </VStack>
  );
};

export default Todo;
