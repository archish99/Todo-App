import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CategoryState } from "../../redux/slices/category-slice";
import CategoryScreen from "../../screens/category-screen/category-screen";
import HomeScreen from "../../screens/home-screen/home-screen";

export type GeneralStackParamsList = {
  dashboard: undefined;
  category: { item: CategoryState };
};

const Stack = createNativeStackNavigator<GeneralStackParamsList>();

const GeneralStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="dashboard" component={HomeScreen} />
      <Stack.Screen name="category" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default GeneralStack;
