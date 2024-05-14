import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import todoApi from "../api/todo";
import { Todo } from "../types/jsontypes";

type TodoProviderProps = {
  children: ReactNode;
};

type TodosListType = {
  id: number;
  content: string;
  editing: boolean;
}[];

type ActionType = {
  type: "delete" | "put" | "post" | "init";
  payload?: {
    id?: number;
    content?: string;
    editing?: boolean;
  };
};

const TodoContext = createContext<TodosListType>([]);
const TodoUpdateContext = createContext<Dispatch<ActionType>>(() => {});

const initialState: Todo | [] = [];

const reducer = (todos: TodosListType, { type, payload }: ActionType): any => {
  switch (type) {
    case "init":
      return [{ ...payload }];
    case "delete":
      return todos.filter((todo) => todo.id !== payload?.id);
    case "post":
      return [
        ...todos,
        {
          id: Math.random(),
          content: payload?.content,
          editing: false,
        },
      ];
    case "put":
      if (!payload?.id) {
        return todos;
      }
      return todos.map((todo) =>
        todo.id === payload.id
          ? { ...todo, content: payload.content, editing: !todo.editing }
          : todo
      );
    default:
      return todos;
  }
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        for await (const todo of todoApi.getAll()) {
          dispatch({
            type: "init",
            payload: todo,
          });
        }
      } catch (err) {
        console.error("Error fetch todo", err);
      }
    };
    fetchData();
  }, []);

  return (
    <TodoContext.Provider value={todos}>
      <TodoUpdateContext.Provider value={dispatch}>
        {children}
      </TodoUpdateContext.Provider>
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
export const useTodoDispatch = () => useContext(TodoUpdateContext);
export default TodoProvider;
