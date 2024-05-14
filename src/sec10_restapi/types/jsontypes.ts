export type Todo = {
  id: number;
  content: string;
  editing: boolean;
};

export type User = {
  id: number;
  username: string;
  age: number;
  hobbies: string[];
  premiumAccount: boolean;
};

export interface ApiResponse {
  todo: Todo[];
  user: User[];
}
