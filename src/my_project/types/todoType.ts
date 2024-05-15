export interface Todo {
  id: number;
  content: string;
  editing: boolean;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export type TodoAction =
  | { type: "FETCH_TODOS"; payload: Todo[] }
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "COMPLETE_TODO"; payload: number }
  | {
      type: "EDIT_TODO";
      payload: { id: number; content: string; editing: boolean };
    };
