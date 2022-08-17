import { IPressableProps, ITextProps, Pressable, Text } from "native-base";
import React from "react";
import colors from "../../constants/colors/colors";

interface Props {
  title: string;
  onPress: () => void;
  extraStylesPressable?: IPressableProps;
  extraStylesText?: ITextProps;
}

const TextBtn: React.FC<Props> = (props) => {
  return (
    <Pressable _pressed={{ opacity: 0.7 }} onPress={props.onPress}>
      <Text fontSize={16} color={colors.colorPrimary}>
        {props.title}
      </Text>
    </Pressable>
  );
};

export default TextBtn;
