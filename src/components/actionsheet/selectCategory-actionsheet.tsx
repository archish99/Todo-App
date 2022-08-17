import { Button, FlatList, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { useSelector } from "react-redux";
import colors from "../../constants/colors/colors";
import { CategoryState } from "../../redux/slices/category-slice";
import { todoState } from "../../redux/slices/todo-slice";
import { RootState } from "../../redux/store";
import CategoryCard from "../categories/category-card";

interface Props {
  addCategory: (item: CategoryState) => void;
  removeCategory: (item: CategoryState) => void;
  categoriesSelected: CategoryState[];
}

const SelectCategoryActionsheet: React.FC<Props> = (props) => {
  const [editItem, setEditItem] = useState<todoState | null>();

  const categories = useSelector((state: RootState) => state.categories);

  const handleSheetClose = () => {
    SheetManager.show("addTodo-actionsheet", {
      item: editItem ? editItem : null,
    });
    if (editItem) setEditItem(null);
  };

  const handleCategoryPress = (item: CategoryState) => {
    if (!editItem) {
      if (props.categoriesSelected.find((el) => el.id === item.id)) {
        props.removeCategory(item);
      } else {
        props.addCategory(item);
      }
    } else {
      if (editItem.categories.find((el) => el.id === item.id)) {
        setEditItem({
          ...editItem,
          categories: editItem.categories.filter((el) => el.id !== item.id),
        });
      } else {
        setEditItem({
          ...editItem,
          categories: [item, ...editItem.categories],
        });
      }
    }
  };

  const handleDone = async () => {
    await SheetManager.hide("selectCategory-actionsheet");
  };

  return (
    <ActionSheet
      id="selectCategory-actionsheet"
      gestureEnabled
      containerStyle={{ backgroundColor: colors.colorGrayDark }}
      indicatorStyle={{ marginTop: 10 }}
      onClose={handleSheetClose}
      onBeforeShow={(data: any) => {
        if (data.item) {
          setEditItem(data.item);
        }
      }}
    >
      <VStack p={5} space={4} pb={10}>
        <Text fontSize={18} fontWeight="bold" color="white">
          Select Category
        </Text>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <CategoryCard
                item={item}
                extraPressableStyles={{
                  w: "48%",
                  mb: 2,
                  bg: colors.colorGrayLight,
                  borderColor: !editItem
                    ? props.categoriesSelected.find((el) => el.id === item.id)
                      ? "white"
                      : "transparent"
                    : editItem.categories.find((el) => el.id === item.id)
                    ? "white"
                    : "transparent",
                  borderWidth: 1,
                }}
                onPress={() => handleCategoryPress(item)}
                extraTextTitleStyles={{ color: "white" }}
                extraTextCountStyles={{ display: "none" }}
              />
            );
          }}
          numColumns={2}
        />
        <Button
          bg="transparent"
          borderWidth={1}
          borderColor="white"
          rounded="lg"
          _pressed={{ bg: "transparent", opacity: 0.7 }}
          onPress={handleDone}
        >
          Done
        </Button>
      </VStack>
    </ActionSheet>
  );
};

export default SelectCategoryActionsheet;
