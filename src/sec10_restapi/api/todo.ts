import axios from "axios";
import { Todo } from "../types/jsontypes";

const ENDPOINT_URL = "http://localhost:3003/todo";

const todoApi = {
  async *getAll() {
    const result = await axios.get<Todo[]>(ENDPOINT_URL);
    console.log(result);
    for (const todo of result.data) {
      yield todo;
    }
  },
  async post(todo: Todo) {
    const result = await axios.post(ENDPOINT_URL, todo);
    console.log(result);
    return result.data;
  },
  async delete(todo: Todo) {
    const result = await axios.delete(ENDPOINT_URL + "/" + todo.id);
    return result.data;
  },
  async patch(todo: Todo) {
    const result = await axios.put(ENDPOINT_URL + "/" + todo.id, todo);
    return result.data;
  },
};

// todoApi.getAll();
// todoApi.post({
//   id: "434344",
//   content: "test",
//   editing: false,
// });
// todoApi.delete({
//   id: "434344",
//   content: "test",
//   editing: false,
// });
// todoApi.patch({
//   id: "434344",
//   content: "買い物をする",
//   editing: false,
// });

export default todoApi;
