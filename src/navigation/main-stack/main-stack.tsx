import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../../screens/home-screen/home-screen";
import OnBoardingScreen from "../../screens/onboarding-screen/onboarding-screen";
import DrawerStack from "../drawer-stack/drawer-stack";

export type MainStackParamsList = {
  onboarding: undefined;
  home: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamsList>();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" component={OnBoardingScreen} />
      <Stack.Screen name="home" component={DrawerStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
