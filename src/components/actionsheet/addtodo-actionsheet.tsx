import { Badge, HStack, Input, Text, VStack } from "native-base";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { useDispatch } from "react-redux";
import colors from "../../constants/colors/colors";
import {
  CategoryState,
  updateCategoriesCount,
} from "../../redux/slices/category-slice";
import { createTodo, editTodo, todoState } from "../../redux/slices/todo-slice";
import IconBtn from "../icon-btn/icon-btn";

interface Props {
  categoriesSelected: CategoryState[];
  resetCategories: () => void;
  setCategoriesSelected: (items: CategoryState[]) => void;
}

const AddTodoActionsheet: React.FC<Props> = (props) => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [editItem, setEditItem] = useState<todoState | null>();

  const dispatch = useDispatch();

  const handleCategorySelect = async () => {
    await SheetManager.hide("addTodo-actionsheet");
    SheetManager.show("selectCategory-actionsheet", {
      item: editItem ? editItem : null,
    });
  };

  const handleAddEditTodo = async () => {
    if (editItem) {
      dispatch(
        editTodo({
          ...editItem,
          title: todoInput,
          categories: props.categoriesSelected,
        })
      );
      setEditItem(null);
    } else {
      if (todoInput === "") return alert("Please insert the title of todo");
      dispatch(
        createTodo({
          title: todoInput,
          description: "Test todo",
          date: new Date().toISOString(),
          categories: props.categoriesSelected,
          isCompleted: false,
        })
      );
      dispatch(updateCategoriesCount({ items: props.categoriesSelected }));
    }
    await SheetManager.hide("addTodo-actionsheet");
    setTodoInput("");
    props.resetCategories();
  };

  return (
    <ActionSheet
      id="addTodo-actionsheet"
      gestureEnabled
      containerStyle={{ backgroundColor: colors.colorGrayDark }}
      indicatorStyle={{ marginTop: 10 }}
      onBeforeShow={(data: any) => {
        if (data?.item) {
          setEditItem(data.item);
          setTodoInput(data.item.title);
          props.setCategoriesSelected(data.item.categories);
        }
      }}
      onClose={() => {
        if (editItem) {
          setTodoInput("");
          setEditItem(null);
          props.resetCategories();
        }
      }}
    >
      <VStack p={5} space={5}>
        <Text fontSize={18} fontWeight="bold" color="white">
          What would you like to do today?
        </Text>
        <Input
          type="text"
          placeholder="Type here"
          fontSize={16}
          color="white"
          selectionColor="white"
          _focus={{ bg: "transparent" }}
          onChangeText={(text) => setTodoInput(text)}
          value={todoInput}
        />
        {props.categoriesSelected.length > 0 ? (
          <HStack>
            {props.categoriesSelected.map((item) => (
              <Badge bg={item.bgColor} mr={2} key={item.id}>
                <Text>{item.title}</Text>
              </Badge>
            ))}
          </HStack>
        ) : null}
        <HStack alignItems="center" justifyContent="space-around">
          <IconBtn
            name="calendar-outline"
            onPress={() => {}}
            extraStylesPressable={{ bg: "transparent" }}
            extraStylesIcon={{ color: colors.colorPrimary, size: 8 }}
          />
          <IconBtn
            name="ios-list"
            onPress={handleCategorySelect}
            extraStylesPressable={{ bg: "transparent" }}
            extraStylesIcon={{ color: colors.colorPrimary, size: 8 }}
          />
          <IconBtn
            name="arrow-up-circle-sharp"
            extraStylesPressable={{ bg: "transparent" }}
            extraStylesIcon={{ color: colors.colorPrimary, size: 9 }}
            onPress={handleAddEditTodo}
          />
        </HStack>
      </VStack>
    </ActionSheet>
  );
};

export default AddTodoActionsheet;
