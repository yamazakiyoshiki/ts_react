import React, { useState } from "react";
import { TodoListType } from "../../models/TodoType";
import { Button, HStack, Input, useToast } from "@chakra-ui/react";

type FormProps = {
  createTodo: (todo: TodoListType) => void;
};

const Form = ({ createTodo }: FormProps) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTodo(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!enteredTodo) {
      toast({
        title: "新しいタスクを入力してください",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };
    createTodo(newTodo);
    setEnteredTodo("");
  };

  return (
    <form onSubmit={addTodo}>
      <HStack>
        <Input
          type="text"
          value={enteredTodo}
          onChange={handleChange}
          placeholder="新しいタスク"
          _placeholder={{ opacity: "0.3", color: "gray.500" }}
          size="lg"
          variant="flushed"
        />
        <Button
          colorScheme="blue"
          size="md"
          variant="outline"
          px={7}
          type="submit"
        >
          追加
        </Button>
      </HStack>
    </form>
  );
};

export default Form;
