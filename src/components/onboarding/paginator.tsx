import { Box, HStack } from "native-base";
import React from "react";
import { Animated, useWindowDimensions } from "react-native";
import colors from "../../constants/colors/colors";
import { dataType } from "../../constants/onboarding-data/onboarding-data";

interface Props {
  data: dataType[];
  scrollX: Animated.Value;
}

const Paginator: React.FC<Props> = (props) => {
  const { width } = useWindowDimensions();

  return (
    <HStack>
      {props.data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = props.scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = props.scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={{
              height: 10,
              width: dotWidth,
              backgroundColor: colors.colorSecondary,
              borderRadius: 5,
              marginHorizontal: 8,
              opacity,
            }}
            key={i.toString()}
          />
        );
      })}
    </HStack>
  );
};

export default Paginator;
