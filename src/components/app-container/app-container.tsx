import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";

interface Props {
  children: ReactNode;
}

const AppContainer: React.FC<Props> = (props) => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <NativeBaseProvider>{props.children}</NativeBaseProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default AppContainer;
