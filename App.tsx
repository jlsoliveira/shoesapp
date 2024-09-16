import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { CartContextProvider } from "./src/contexts/CartContext";
import { Loading } from "./src/components/Loading";
import { NativeBaseProvider } from "native-base";
import { OneSignal } from "react-native-onesignal";
import { Routes } from "./src/routes";
import { StatusBar } from "react-native";
import { THEME } from "./src/theme";

OneSignal.initialize("d00c84df-8c28-4f06-99aa-f2216b78cb80");

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
