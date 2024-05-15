import React, { createContext, useContext, useEffect, useReducer } from "react";
import { TodoAction, TodoState } from "../types/todoType";
import todoReducers from "../reducers/TodoReducer";
import { fetchTodos } from "../api/todoApi";

type TodoProviderProps = {
  children: React.ReactNode;
};

const initialState: TodoState = {
  todos: [],
};

const TodoContext = createContext<TodoState | undefined>(undefined);
const TodoUpdateContext = createContext<React.Dispatch<TodoAction>>(() => {});

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(todoReducers, initialState);

  useEffect(() => {
    try {
      fetchTodos().then((todos) => {
        dispatch({ type: "FETCH_TODOS", payload: todos });
      });
    } catch (err) {
      console.error("Error fetching todos", err);
    }
  }, []);
  return (
    <TodoContext.Provider value={state}>
      <TodoUpdateContext.Provider value={dispatch}>
        {children}
      </TodoUpdateContext.Provider>
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
export const useTodoDispatch = () => useContext(TodoUpdateContext);

export default TodoProvider;
