import React, { useState } from "react";
import { Todo } from "../types/todoType";
import { useTodoDispatch } from "../context/TodoContext";
import { deleteTodo, putTodo } from "../api/todoApi";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import {
  MdCheck,
  MdCreate,
  MdDeleteForever,
  MdOutlineSecurityUpdateGood,
} from "react-icons/md";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const [newContent, setNewContent] = useState("");
  const [toggleEdit, setToggleEdit] = useState(false);
  const dispatch = useTodoDispatch();

  const toggleEditMode = () => setToggleEdit((prev) => !prev);

  const editContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewContent(e.target.value);
  };

  const editTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editedTodo = {
      id: todo.id,
      content: newContent || todo.content,
      editing: false,
      completed: todo.completed,
    };
    putTodo(editedTodo).then((updatedTodo) => {
      dispatch({ type: "EDIT_TODO", payload: updatedTodo });
    });
    setNewContent("");
    setToggleEdit(false);
  };

  const removeTodo = (todo: Todo) => {
    deleteTodo(todo).then(() => {
      dispatch({ type: "DELETE_TODO", payload: todo.id });
    });
  };

  const completeTodo = () => {
    dispatch({
      type: "COMPLETE_TODO",
      payload: todo.id,
    });
  };

  return (
    <Container
      sx={{
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          marginBottom: 5,
          wordWrap: "break-word",
        }}
      >
        {todo.content}
      </Typography>
      {toggleEdit ? (
        <Box
          component="form"
          onSubmit={editTodo}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            type="text"
            value={newContent}
            onChange={editContent}
            label={todo.content}
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<MdCheck />}
            sx={{
              marginBottom: 2,
            }}
          >
            編集完了
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 1,
            }}
            startIcon={<MdCreate />}
            onClick={toggleEditMode}
          >
            編集
          </Button>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={completeTodo}
          startIcon={<MdOutlineSecurityUpdateGood />}
          sx={{ marginTop: 1 }}
        >
          完了
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => removeTodo(todo)}
          startIcon={<MdDeleteForever />}
          sx={{ marginTop: 1 }}
        >
          削除
        </Button>
      </Box>
    </Container>
  );
};

export default TodoItem;
