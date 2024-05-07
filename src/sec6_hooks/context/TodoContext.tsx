import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

type TodoProviderProps = {
  children: ReactNode;
};

type TodosListType = {
  id: number;
  content: string;
  editing: boolean;
}[];

type ActionType = {
  type: "delete" | "put" | "post";
  payload?: {
    id?: number;
    content?: string;
    editing?: boolean;
  };
};

const TodoContext = createContext<TodosListType>([]);
const TodoUpdateContext = createContext<Dispatch<ActionType>>(() => {});

const todosList = [
  {
    id: 1,
    content: "店予約する",
    editing: false,
  },
  {
    id: 2,
    content: "卵買う",
    editing: false,
  },
  {
    id: 3,
    content: "郵便出す",
    editing: false,
  },
];

const reducer = (todos: TodosListType, { type, payload }: ActionType): any => {
  switch (type) {
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
  const [todos, dispatch] = useReducer(reducer, todosList);

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
