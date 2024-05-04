type ListProps = {
  todos: {
    id: number;
    content: string;
  }[];
  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        content: string;
      }[]
    >
  >;
};

const List = ({ todos, setTodos }: ListProps) => {
  const deleteTodo = (id: number) => {
    const deleteTodos = [...todos];
    const deletedTodo = deleteTodos.filter((todo) => todo.id !== id);
    setTodos(deletedTodo);
  };
  return (
    <>
      <h2>List.tsx</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button onClick={() => deleteTodo(todo.id)}>完了</button>
            {todo.content}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
