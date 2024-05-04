type ListProps = {
  todos: {
    id: number;
    content: string;
  }[];
  deleteTodo: (id: number) => void;
};

const List = ({ todos, deleteTodo }: ListProps) => {
  const complete = (id: number) => {
    deleteTodo(id);
  };
  return (
    <>
      <h2>List.tsx</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button onClick={() => complete(todo.id)}>完了</button>
            <span>{todo.content}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
