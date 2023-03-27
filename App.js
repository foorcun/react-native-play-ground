import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import FlutterStart from "./MyModules/FlutterStart/src/features/EkranAlani/screens/EkranAlanlari";
// import FlutterStart from "./MyModules/FlutterStart/src/features/FlutterStartHome/screens/FlutterStart";
// import IlkHome from "./MyModules/IlkKodlar/src/features/IlkHome/screens/IlkHome";
import ThemeProviderModule from "./MyModules/ThemeProviderModule/src/features/home/screens/Home";
import { ThemeProvider } from "styled-components/native";
// import { theme } from "./MyModules/FlutterStart/src/infrastructure/theme";

import { createTheme } from "styled-components";

// const theme = createTheme({
//   colors: {
//     primary: "#007AFF",
//     secondary: "#6C757D",
//     background: "#FFFFFF",
//     text: "#333333",
//   },
//   fonts: {
//     regular: "Arial",
//     bold: "Arial-Bold",
//   },
// });

const theme = {
  primary: "dodgerblue",
};

// export default function App() {
//   return (<>
//   <View></View>
//   </>);
//   }
// }

//export default function App() {
//return (
//<>
//<EkranAlanlari></EkranAlanlari>
//</>
//);
//}

export default function App() {
  console.log(theme.primary);
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <FlutterStart></FlutterStart> */}
        {/* <IlkHome></IlkHome> */}
        <ThemeProviderModule></ThemeProviderModule>
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
