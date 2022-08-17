import { Box, FlatList, Text } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TodoItem from "./todo-item";

const TodoList: React.FC = () => {
  const todoList = useSelector((state: RootState) => state.todoList);

  return (
    <Box mt={5}>
      {todoList.length > 0 ? (
        <FlatList
          data={todoList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem item={item} />}
        />
      ) : (
        <Text textAlign="center" fontSize={16} color="white">
          No todo created yet
        </Text>
      )}
    </Box>
  );
};

export default TodoList;
