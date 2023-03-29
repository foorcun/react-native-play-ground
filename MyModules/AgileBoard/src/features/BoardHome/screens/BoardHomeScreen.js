import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BoardBody } from "../components/BoardBody";
import { BoardBodyImpl } from "../components/BoardBodyImpl";

export const BoardHomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Board home screen</Text> */}
      {/* <BoardBody></BoardBody> */}
      <BoardBodyImpl></BoardBodyImpl>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
