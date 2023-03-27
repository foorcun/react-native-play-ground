import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { useTheme } from "styled-components/native";

import { CustomView } from "../components/CustomView";

export default function Home() {
  // const theme = useContext(ThemeContext);
  // console.log("bu Home dan " + theme.primary);

  const theme = useTheme();

  console.log("bu Home dan " + theme.primary);

  return (
    // <View style={styles.container}  >
    <CustomView
    // style={(styles.container, { flex: 1, backgroundColor: theme.primary })}
    // style={styles.container}
    >
      <Text>Open up renk su: {theme.primary}</Text>
      <StatusBar style="auto" />
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // backgroundColor: theme.primary,

    alignItems: "center",
    justifyContent: "center",
  },
});
