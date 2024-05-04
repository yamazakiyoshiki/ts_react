import React, { useState } from "react";

type FormProps = {
  todos: {
    id: number;
    content: string;
  }[];
  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        content: string;
      }[]
    >
  >;
};

const Form = ({ todos, setTodos }: FormProps) => {
  const [desc, setDesc] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };

  const createTodo = () => {
    const newTodos = [...todos];
    newTodos.push({ id: Math.random(), content: desc });
    setTodos(newTodos);
    setDesc("");
  };

  return (
    <>
      <h2>Form.tsx</h2>
      <input type="text" value={desc} onChange={handleChange} />
      <button onClick={createTodo}>追加</button>
    </>
  );
};

export default Form;
