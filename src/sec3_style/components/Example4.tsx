import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Todo from "../refector/Todo";

const Example4 = () => {
  return (
    <ChakraProvider>
      <Todo />
    </ChakraProvider>
  );
};

export default Example4;
