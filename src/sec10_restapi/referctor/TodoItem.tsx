import { useTodoDispatch } from "../context/TodoContext";

type TodoItemProps = {
  todo: {
    id: number;
    content: string;
    editing: boolean;
  };
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useTodoDispatch();

  const deleteTodo = (id: number) => {
    dispatch({
      type: "delete",
      payload: { id: id, content: "", editing: false },
    });
  };

  return (
    <div key={todo.id}>
      <button onClick={() => deleteTodo(todo.id)}>完了</button>

      <span>{todo.content}</span>
    </div>
  );
};

export default TodoItem;
