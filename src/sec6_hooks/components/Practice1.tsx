import React, { useReducer, ChangeEvent } from "react";

// ステートの型定義
interface State {
  a: number;
  b: number;
  result: number;
}

// アクションの型定義
interface Action {
  type: string;
  payload?: {
    name: string;
    value: number;
  };
}

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"] as const;

const reducer = (state: State, { type, payload }: Action): State => {
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
      throw new Error("不正な値です。");
  }
};

const Practice1 = () => {
  const initState: State = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: e.target.value });
  };
  const numChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: parseInt(e.target.value) },
    });
  };

  return (
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
      <select onChange={calculate}>
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

export default Practice1;
