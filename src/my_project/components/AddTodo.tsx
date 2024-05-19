import React, { useState } from "react";
import { useTodoDispatch } from "../context/TodoContext";
import { postTodo } from "../api/todoApi";
import { Todo } from "../types/todoType";
import { Box, Button, TextField, Typography } from "@mui/material";
import { MdAdd } from "react-icons/md";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // minHeight: "100vh",
        margin: "50px",
        padding: "40px",
        backgroundColor: "#9edcae",
      }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        タスクを追加
      </Typography>
      <form
        onSubmit={addTodo}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "20px",
          gap: "20px",
        }}
      >
        <TextField
          type="text"
          value={addContent}
          onChange={newTodoContent}
          label="タスク内容"
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" startIcon={<MdAdd />}>
          タスクを追加
        </Button>
      </form>
    </Box>
  );
};

export default AddTodo;
