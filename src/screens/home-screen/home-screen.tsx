import { Box, HStack, Text, VStack } from "native-base";
import React, { useState } from "react";
import { SheetManager } from "react-native-actions-sheet";
import { useSelector } from "react-redux";
import AddTodoActionsheet from "../../components/actionsheet/addtodo-actionsheet";
import SelectCategoryActionsheet from "../../components/actionsheet/selectCategory-actionsheet";
import TextBtn from "../../components/button/text-btn";
import CategoriesList from "../../components/categories/categories-list";
import TodoList from "../../components/todo/todo-list";
import HeadingPrimary from "../../components/typography/heading-primary";
import { CategoryState } from "../../redux/slices/category-slice";
import { RootState } from "../../redux/store";

const HomeScreen: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<CategoryState[]>(
    []
  );

  const handleShowAddTodoActionsheet = () => {
    SheetManager.show("addTodo-actionsheet");
  };

  const handleAddCategory = (item: CategoryState) => {
    setSelectedCategories([item, ...selectedCategories]);
  };

  const handleRemoveCategory = (item: CategoryState) => {
    setSelectedCategories(selectedCategories.filter((el) => el.id !== item.id));
  };

  const handleResetCategory = () => {
    setSelectedCategories([]);
  };

  const todosLength = useSelector((state: RootState) => state.todoList.length);

  return (
    <VStack flex={1} bg="black" p={4} space={7}>
      <Box>
        <Text color="white" fontWeight="bold" fontSize={22}>
          Hi, Alex!
        </Text>
        <Text color="gray.400">You have {todosLength} tasks today</Text>
      </Box>
      <Box>
        <HStack alignItems="center" justifyContent="space-between">
          <HeadingPrimary title="Categories" />
          <TextBtn title="Add" onPress={() => console.log("Pressed")} />
        </HStack>
        <CategoriesList />
      </Box>
      <Box>
        <HStack alignItems="center" justifyContent="space-between">
          <HeadingPrimary title="Today's tasks" />
          <TextBtn title="Add" onPress={handleShowAddTodoActionsheet} />
        </HStack>
        <TodoList />
      </Box>
      <AddTodoActionsheet
        categoriesSelected={selectedCategories}
        setCategoriesSelected={setSelectedCategories}
        resetCategories={handleResetCategory}
      />
      <SelectCategoryActionsheet
        categoriesSelected={selectedCategories}
        addCategory={handleAddCategory}
        removeCategory={handleRemoveCategory}
      />
    </VStack>
  );
};

export default HomeScreen;
