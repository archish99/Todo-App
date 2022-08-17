import {
  HStack,
  IPressableProps,
  ITextProps,
  Pressable,
  Text,
} from "native-base";
import React from "react";
import { CategoryState } from "../../redux/slices/category-slice";

interface Props {
  item: CategoryState;
  extraPressableStyles?: IPressableProps;
  extraTextTitleStyles?: ITextProps;
  extraTextCountStyles?: ITextProps;
  onPress?: () => void;
}

const CategoryCard: React.FC<Props> = (props) => {
  return (
    <Pressable
      p={4}
      rounded="lg"
      mr={2}
      bg={props.item.bgColor}
      alignItems="center"
      justifyContent="space-between"
      flexDir="row"
      onPress={props.onPress}
      {...props.extraPressableStyles}
    >
      <Text mr={4} {...props.extraTextTitleStyles}>
        {props.item.title}
      </Text>
      <Text {...props.extraTextCountStyles}>{props.item.count}</Text>
    </Pressable>
  );
};

export default CategoryCard;
