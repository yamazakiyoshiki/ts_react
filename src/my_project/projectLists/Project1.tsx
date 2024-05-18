import React from "react";
import TodoProvider from "../context/TodoContext";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import CompletedTodoList from "../components/CompletedTodoList";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5693d0",
    },
    secondary: {
      main: "#dc3570",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 5,
});

const Project1 = () => {
  return (
    <TodoProvider>
      <ThemeProvider theme={theme}>
        <AddTodo />
        <TodoList />
        <CompletedTodoList />
      </ThemeProvider>
    </TodoProvider>
  );
};

export default Project1;
