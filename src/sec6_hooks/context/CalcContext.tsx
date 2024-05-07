import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

type CalcProviderProps = {
  children: ReactNode;
};

type StateType = {
  a: number;
  b: number;
  result: number;
};
type Actiontype = {
  type: string;
  payload?: {
    name: string;
    value: number;
  };
};

const CalcContext = createContext<StateType>({
  a: 1,
  b: 2,
  result: 3,
});
const CalcUpdateContext = createContext<Dispatch<Actiontype>>(() => {});

const reducer = (state: StateType, { type, payload }: Actiontype) => {
  switch (type) {
    case "change": {
      if (!payload) return state;
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    case "add": {
      return { ...state, result: state.a + state.b };
    }
    case "minus": {
      return { ...state, result: state.a - state.b };
    }
    case "divide": {
      return { ...state, result: state.a / state.b };
    }
    case "multiply": {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error("operator is invalid");
  }
};

const CalcProvider = ({ children }: CalcProviderProps) => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <CalcContext.Provider value={state}>
      <CalcUpdateContext.Provider value={dispatch}>
        {children}
      </CalcUpdateContext.Provider>
    </CalcContext.Provider>
  );
};

export const useCalc = () => useContext(CalcContext);
export const useCalcDispatch = () => useContext(CalcUpdateContext);
export default CalcProvider;
