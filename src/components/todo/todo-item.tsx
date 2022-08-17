import { Badge, HStack, Pressable, Text } from "native-base";
import React from "react";
import { SheetManager } from "react-native-actions-sheet";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import colors from "../../constants/colors/colors";
import { todoState, updateTodoStatus } from "../../redux/slices/todo-slice";

const TodoItem: React.FC<{ item: todoState }> = (props) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      p={3}
      rounded="lg"
      bg={colors.colorGrayDark}
      alignItems="center"
      justifyContent="space-between"
      flexDir="row"
      mb={3}
      onPress={() =>
        SheetManager.show("addTodo-actionsheet", { item: props.item })
      }
    >
      <BouncyCheckbox
        size={25}
        fillColor={colors.colorPrimary}
        unfillColor={colors.colorGrayDark}
        isChecked={props.item.isCompleted}
        onPress={(isChecked: boolean) => {
          dispatch(updateTodoStatus({ id: props.item.id }));
        }}
        textComponent={
          <Text
            maxW="80%"
            isTruncated
            ml={3}
            color="white"
            strikeThrough={props.item.isCompleted}
            opacity={props.item.isCompleted ? 0.7 : 1}
          >
            {props.item.title}
          </Text>
        }
      />
      {props.item.categories.length > 0 ? (
        <HStack>
          {props.item.categories.slice(0, 3).map((el) => (
            <Badge key={el.id} bg={el.bgColor} mr={2} px={1}>
              <Text>{el.title}</Text>
            </Badge>
          ))}
        </HStack>
      ) : null}
    </Pressable>
  );
};

export default TodoItem;
