import { createDrawerNavigator } from "@react-navigation/drawer";
import { Avatar, Box, Icon } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import GeneralStack from "../general-stack/general-stack";

export type DrawerStackParamsList = {
  main: undefined;
};

const Drawer = createDrawerNavigator<DrawerStackParamsList>();

const DrawerStack: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerTitle: "",
        drawerContentStyle: { backgroundColor: "#383838" },
        drawerActiveTintColor: "white",
        headerBackground: () => <Box bg="black" flex={1} />,
        headerLeft: (props) => (
          <Icon
            as={Ionicons}
            name="menu-outline"
            color="blue.400"
            size={7}
            ml={Platform.OS === "android" ? 4 : 2}
            onPress={() => navigation.toggleDrawer()}
            {...props}
          />
        ),
        headerRight: () => (
          <Box mr={4} mt={2}>
            <Avatar
              size="md"
              bg="green.500"
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            />
          </Box>
        ),
      })}
    >
      <Drawer.Screen
        name="main"
        component={GeneralStack}
        options={{ drawerLabel: "Home" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
