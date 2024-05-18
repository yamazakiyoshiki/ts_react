import React from "react";
import { useTodo } from "../context/TodoContext";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

const CompletedTodoList = () => {
  const todos = useTodo();
  return (
    <Box sx={{ padding: 6, margin: 10, backgroundColor: "#e9e1ce" }}>
      <Typography variant="h3" align="center" gutterBottom>
        完了したタスク
      </Typography>
      <List>
        {todos?.todos.map(
          (todo) =>
            todo.completed && (
              <ListItem key={todo.id} sx={{ marginBottom: 2 }}>
                <Paper
                  sx={{ padding: 2, width: "100%", backgroundColor: "#a5deed" }}
                >
                  <ListItemText
                    primary={todo.content}
                    sx={{
                      textAlign: "center",
                    }}
                  />
                </Paper>
              </ListItem>
            )
        )}
      </List>
    </Box>
  );
};

export default CompletedTodoList;
