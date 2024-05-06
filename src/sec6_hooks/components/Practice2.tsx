import React, { useReducer } from "react";

type StateType = {
  a: number;
  b: number;
  result: number;
  type?: string;
};
type Actiontype = {
  type: string;
  payload?: {
    name: string;
    value: number;
  };
};

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

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

const Practice2 = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: e.target.value });
  };
  const numChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: parseInt(e.target.value) },
    });
  };
  return (
    // <CalcProvider>
    //   <Input name="a"/>
    //   <Input name="b" />
    //   <Select />
    //   <Result />
    // </CalcProvider>
    <>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} name="type" onChange={calculate}>
        {CALC_OPTIONS.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <h3>結果：{state.result}</h3>
    </>
  );
};

export default Practice2;
