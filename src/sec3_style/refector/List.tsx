import {
  HStack,
  IconButton,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { VscCheck } from "react-icons/vsc";

type ListProps = {
  todos: {
    id: number;
    content: string;
  }[];
  deleteTodo: (id: number) => void;
};

const List = ({ todos, deleteTodo }: ListProps) => {
  const complete = (id: number) => {
    deleteTodo(id);
  };
  return (
    <VStack
      divider={<StackDivider />}
      width="80%"
      bgColor="white"
      color={{
        sm: "red.600",
        md: "blue.600",
        lg: "green.600",
        xl: "red.600",
      }}
      borderColor="blackAlpha.100"
      borderWidth="1px"
      borderRadius="3px"
      p={5}
      alignItems="center"
    >
      {todos.map((todo) => (
        <HStack key={todo.id} spacing="5">
          <IconButton
            onClick={() => complete(todo.id)}
            icon={<VscCheck />}
            aria-label="Mark todo as complete"
            isRound
            bgColor="cyan.100"
            opacity="0.8"
          >
            完了
          </IconButton>
          <Text>{todo.content}</Text>
        </HStack>
      ))}
    </VStack>
  );
};

export default List;
