import React, { useState } from "react";
import { useTodoDispatch } from "../context/TodoContext";
import { postTodo } from "../api/todoApi";
import { Todo } from "../types/todoType";

const AddTodo = () => {
  const [addContent, setAddContent] = useState("");
  const dispatch = useTodoDispatch();

  const newTodoContent = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddContent(e.target.value);

  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (addContent.trim() === "") {
      alert("タスク内容を入力してください");
      return;
    } else {
      const newTodo: Todo = {
        id: Math.floor(Math.random() * 1e5),
        content: addContent,
        completed: false,
        editing: false,
      };
      const addTodo = await postTodo(newTodo);
      dispatch({ type: "ADD_TODO", payload: addTodo });
      setAddContent("");
    }
  };
  return (
    <>
      <h1>TODOを追加する</h1>
      <form onSubmit={addTodo}>
        <input type="text" value={addContent} onChange={newTodoContent} />
        <button type="submit">タスクを追加</button>
      </form>
    </>
  );
};

export default AddTodo;
