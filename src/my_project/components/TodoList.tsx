import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../context/TodoContext";
import { Box, Grid, Typography } from "@mui/material";

const TodoList = () => {
  const todos = useTodo();
  return (
    <Box
      sx={{
        backgroundColor: "#f7c5c5",
        padding: "40px",
        margin: "50px",
      }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        未完了のタスク
      </Typography>
      <Box>
        <Grid
          container
          sx={{
            marginTop: "50px",
            gap: 20,
            justifyContent: "center",
          }}
        >
          {todos?.todos.map(
            (todo, index) =>
              !todo.completed && (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  key={todo.id}
                  sx={{
                    backgroundColor: "#afb67f",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  <TodoItem key={todo.id} todo={todo} />
                </Grid>
              )
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default TodoList;
