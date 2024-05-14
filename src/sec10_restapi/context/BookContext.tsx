import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

type BookProviderProps = {
  children: ReactNode;
};

type BookListType = {
  id: number;
  title: string;
  author: string;
  pubYear: number;
  editing: boolean;
}[];

type ActionType = {
  type: "ADD_BOOK" | "REMOVE_BOOK" | "EDIT_BOOK";
  payload: {
    id: number;
    title: string;
    author: string;
    pubYear: number;
    editing: boolean;
  };
};

const BooksContext = createContext<BookListType>([
  {
    id: 1,
    title: "",
    author: "",
    pubYear: 1,
    editing: false,
  },
]);
const BooksUpdateContext = createContext<Dispatch<ActionType>>(() => {});

const initialBooksState: BookListType = [];

const reducer = (books: BookListType, action: ActionType) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...books,
        {
          id: action.payload.id,
          title: action.payload.title,
          author: action.payload.author,
          pubYear: action.payload.pubYear,
          editing: false,
        },
      ];
    case "REMOVE_BOOK":
      return books.filter((book) => book.id !== action.payload.id);
    case "EDIT_BOOK":
      return books.map((book) =>
        book.id === action.payload.id
          ? { ...book, ...action.payload, editing: !book.editing }
          : book
      );
    default:
      return books;
  }
};

const BookProvider = ({ children }: BookProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialBooksState);
  return (
    <BooksContext.Provider value={state}>
      <BooksUpdateContext.Provider value={dispatch}>
        {children}
      </BooksUpdateContext.Provider>
    </BooksContext.Provider>
  );
};

export const useBook = () => useContext(BooksContext);
export const useBookDispatch = () => useContext(BooksUpdateContext);
export default BookProvider;
