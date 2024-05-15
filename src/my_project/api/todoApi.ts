import axios from "axios";
import { Todo } from "../types/todoType";

const ENDPOINT_URL = "http://localhost:3003/todos";

const fetchTodos = async () => {
  const response = await axios.get<Todo[]>(ENDPOINT_URL);
  return response.data;
};

const postTodo = async (todo: Todo) => {
  const response = await axios.post<Todo>(ENDPOINT_URL, todo);
  return response.data;
};

const deleteTodo = async (todo: Todo) => {
  await axios.delete(`${ENDPOINT_URL}/${todo.id}`);
};

const putTodo = async (todo: Todo) => {
  const response = await axios.put<Todo>(`${ENDPOINT_URL}/${todo.id}`, todo);
  return response.data;
};

export { fetchTodos, postTodo, deleteTodo, putTodo };
