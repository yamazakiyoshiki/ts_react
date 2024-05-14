import React, { useState } from "react";
import { useTodoDispatch } from "../context/TodoContext";
const Form = () => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const dispatch = useTodoDispatch();

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "post", payload: { content: enteredTodo } });
    setEnteredTodo("");
  };

  const createTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTodo(e.target.value);
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" value={enteredTodo} onChange={createTodo} />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
