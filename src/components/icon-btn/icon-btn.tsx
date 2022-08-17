import React from "react";
import {
  Flex,
  Icon,
  IIconProps,
  IPressableProps,
  Pressable,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors/colors";

interface Props {
  name: keyof typeof Ionicons.glyphMap;
  extraStylesPressable?: IPressableProps;
  extraStylesIcon?: IIconProps;
  onPress: () => void;
}

const IconBtn: React.FC<Props> = (props) => {
  return (
    <Pressable
      justifyContent="center"
      alignItems="center"
      borderRadius="full"
      bg={colors.colorPrimary}
      p={3}
      onPress={props.onPress}
      {...props.extraStylesPressable}
    >
      <Icon
        as={Ionicons}
        name={props.name}
        size={6}
        color="white"
        {...props.extraStylesIcon}
      />
    </Pressable>
  );
};

export default IconBtn;
