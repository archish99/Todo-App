import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, FlatList, HStack, VStack } from "native-base";
import React, { useRef, useState } from "react";
import { Animated } from "react-native";
import IconBtn from "../../components/icon-btn/icon-btn";
import OnboardingItem from "../../components/onboarding/onboarding-item";
import Paginator from "../../components/onboarding/paginator";
import onboardingData from "../../constants/onboarding-data/onboarding-data";
import { MainStackParamsList } from "../../navigation/main-stack/main-stack";

type Props = NativeStackScreenProps<MainStackParamsList, "onboarding">;

const OnBoardingScreen: React.FC<Props> = (props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef((e: any) => {
    setCurrentIndex(e.viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const slidesRef = useRef<any>(null);

  const handleOnPress = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      props.navigation.replace("home");
    }
  };

  return (
    <VStack bg="black" flex={1} pt={20} justifyContent="space-between">
      <Box>
        <FlatList
          data={onboardingData}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          bounces={false}
          pagingEnabled
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </Box>
      <HStack p={10} alignItems="center" justifyContent="space-between">
        <Paginator data={onboardingData} scrollX={scrollX} />
        <IconBtn
          name={
            currentIndex === onboardingData.length - 1
              ? "checkmark"
              : "arrow-forward-outline"
          }
          onPress={handleOnPress}
        />
      </HStack>
    </VStack>
  );
};

export default OnBoardingScreen;
