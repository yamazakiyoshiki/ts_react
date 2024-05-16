import React, { useState } from "react";
import { Todo } from "../types/todoType";
import { useTodoDispatch } from "../context/TodoContext";
import { deleteTodo, putTodo } from "../api/todoApi";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const [newContent, setNewContent] = useState("");
  const [toggleEdit, setToggleEdit] = useState(false);
  const [completed, setCompleted] = useState(false);
  const dispatch = useTodoDispatch();

  const toggleEditMode = () => setToggleEdit((prev) => !prev);

  const editContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewContent(e.target.value);
  };

  const editTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newContent) {
      const editedTodo = {
        id: todo.id,
        content: todo.content,
        editing: toggleEdit,
        completed: todo.completed,
      };
      putTodo(editedTodo).then((todo) => {
        dispatch({ type: "EDIT_TODO", payload: todo });
      });
      setNewContent("");
      setToggleEdit((prev) => !prev);
    } else {
      const editedTodo = {
        id: todo.id,
        content: newContent,
        editing: toggleEdit,
        completed: todo.completed,
      };
      putTodo(editedTodo).then((todo) => {
        dispatch({ type: "EDIT_TODO", payload: editedTodo });
      });
      setNewContent("");
      setToggleEdit((prev) => !prev);
    }
  };

  const removeTodo = (todo: Todo) => {
    deleteTodo(todo).then(() => {
      dispatch({ type: "DELETE_TODO", payload: todo.id });
    });
  };

  const completeTodo = () => {
    setCompleted((prev) => !prev);
    dispatch({
      type: "COMPLETE_TODO",
      payload: todo.id,
    });
  };
  return (
    <div>
      {!completed && (
        <>
          <h2>{todo.content}</h2>
          {toggleEdit ? (
            <div>
              <form onSubmit={editTodo}>
                <input type="text" value={newContent} onChange={editContent} />
                <button type="submit">編集完了</button>
              </form>
            </div>
          ) : (
            <div>
              <button onClick={toggleEditMode}>編集</button>
            </div>
          )}
          <button onClick={completeTodo}>完了</button>
          <button onClick={() => removeTodo(todo)}>削除</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
