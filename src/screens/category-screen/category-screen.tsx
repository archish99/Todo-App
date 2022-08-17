import { RouteProp, useRoute } from "@react-navigation/native";
import { Center, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GeneralStackParamsList } from "../../navigation/general-stack/general-stack";
import { todoState } from "../../redux/slices/todo-slice";
import { RootState } from "../../redux/store";

const CategoryScreen: React.FC = () => {
  const [todos, setTodos] = useState<todoState[]>([]);

  const route = useRoute<RouteProp<GeneralStackParamsList, "category">>();

  const todoList = useSelector((state: RootState) => state.todoList);

  useEffect(() => {
    if (todoList.length > 0) {
      const todosFiltered = todoList.map((item) => {
        if (item.categories.find((el) => el.id === route.params.item.id)) {
          return item;
        }
      });

      console.log("Items: ", todosFiltered);
    }
  }, []);

  return (
    <Center flex={1}>
      <Text>Category Screen</Text>
    </Center>
  );
};

export default CategoryScreen;
