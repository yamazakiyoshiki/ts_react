import React, { createContext } from "react";
import Child from "../referctor/Child";

export const MyContext = createContext("hello");

const Example2 = () => {
  // const value = "hello";
  return <Child />;
};

export default Example2;
