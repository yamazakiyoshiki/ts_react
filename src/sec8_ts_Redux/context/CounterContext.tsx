import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

type CounterProviderProps = {
  children: ReactNode;
};
type State = number;
type Action = {
  type: string;
  step: number;
};

const CounterContext = createContext(0);
const CounterDispatchContext = createContext<Dispatch<Action>>(() => {});

const reducer = (prev: State, { type, step }: Action) => {
  switch (type) {
    case "+":
      return prev + step;
    case "-":
      return prev - step;
    default:
      throw new Error("不明なactionです。");
  }
};

const CounterProvider = ({ children }: CounterProviderProps) => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
export const useDispatch = () => useContext(CounterDispatchContext);
export default CounterProvider;
