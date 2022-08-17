import { Image, Text, VStack } from "native-base";
import React from "react";
import { Dimensions, ImageSourcePropType } from "react-native";
import { dataType } from "../../constants/onboarding-data/onboarding-data";

interface Props {
  item: dataType;
}

const OnboardingItem: React.FC<Props> = (props) => {
  return (
    <VStack alignItems="center" w={Dimensions.get("window").width} px={8}>
      <Image
        source={props.item.image}
        w={300}
        h={300}
        alt={props.item.title}
        my={10}
        // flex={0.7}
      />
      <Text
        textAlign="center"
        color="white"
        fontWeight="bold"
        fontSize={22}
        mb={2}
      >
        {props.item.title}
      </Text>
      <Text textAlign="center" color="white" fontSize={18}>
        {props.item.description}
      </Text>
    </VStack>
  );
};

export default OnboardingItem;
