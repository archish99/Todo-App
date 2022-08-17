import { StatusBar } from "expo-status-bar";
import AppContainer from "./src/components/app-container/app-container";
import MainStack from "./src/navigation/main-stack/main-stack";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AppContainer>
        <MainStack />
      </AppContainer>
    </>
  );
}
