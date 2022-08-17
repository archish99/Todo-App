import { Text } from "native-base";
import React from "react";

interface Props {
  title: string;
}

const HeadingPrimary: React.FC<Props> = (props) => {
  return (
    <Text fontWeight="bold" fontSize={18} color="white">
      {props.title}
    </Text>
  );
};

export default HeadingPrimary;
