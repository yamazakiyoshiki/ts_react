import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import Child from "../referctor/Child";
import OtherChild from "../referctor/OtherChild";

type ContextType = [number, Dispatch<SetStateAction<number>>];

export const MyContext = createContext<ContextType>([0, () => {}]);

const Example3 = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <MyContext.Provider value={[value, setValue]}>
        <Child />
        <OtherChild />
      </MyContext.Provider>
    </>
  );
};

export default Example3;
