import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import FlutterStart from "./MyModules/FlutterStart/src/features/EkranAlani/screens/EkranAlanlari";
import FlutterStart from "./MyModules/FlutterStart/src/features/FlutterStartHome/screens/FlutterStart";
// import IlkHome from "./MyModules/IlkKodlar/src/features/IlkHome/screens/IlkHome";
import ThemeProviderModule from "./MyModules/ThemeProviderModule/src/features/home/screens/Home";
import { ThemeProvider } from "styled-components/native";
// import { theme } from "./MyModules/FlutterStart/src/infrastructure/theme";

import { createTheme } from "styled-components";

const theme = {
  colors: {
    ui: {
      primary: "dodgerblue",
    },
  },
};

export default function App() {
  console.log(theme.colors.ui.primary);
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <EkranAlanlari></EkranAlanlari> */}

        <FlutterStart></FlutterStart>
        {/* <IlkHome></IlkHome> */}
        {/* <ThemeProviderModule></ThemeProviderModule> */}
      </ThemeProvider>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
