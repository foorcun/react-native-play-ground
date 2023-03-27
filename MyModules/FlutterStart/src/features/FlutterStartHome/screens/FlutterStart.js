import { width } from "@mui/system";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import ButtonAppBar from "../components/ButtonAppBar";
import FloatingButton from "../components/FloatingButton";
import LeanAppBar from "../components/LeanAppBar";
// import { Dimensions } from "react-native";

export default function FlutterStart() {
  return (
    <View style={{ flex: 1, backgroundColor: "pink" }}>
      {/* <ButtonAppBar></ButtonAppBar> */}
      <LeanAppBar />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.text}>
          You have pushed the button this many times:
        </Text>
      </View>
      <FloatingButton></FloatingButton>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonAppBar: {
    // width: { windowWidth },
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center", // horizontal center
    textAlignVertical: "center", // vertical center, but this supported only on Android
  },
});
