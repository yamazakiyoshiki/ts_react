import React, { useState } from "react";
import { TodoListType } from "../../../models/TodoType";

type FormProps = {
  createTodo: (todo: TodoListType) => void;
};

const Form = ({ createTodo }: FormProps) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTodo(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };
    createTodo(newTodo);
    setEnteredTodo("");
  };

  return (
    <>
      <h2>Form.tsx</h2>
      <form onSubmit={addTodo}>
        <input type="text" value={enteredTodo} onChange={handleChange} />
        <button>追加</button>
      </form>
    </>
  );
};

export default Form;
