import { width } from "@mui/system";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import ButtonAppBar from "../components/ButtonAppBar";
// import { Dimensions } from "react-native";

export default function FlutterStart() {
  const { windowDimensions } = Dimensions.get("window");

  return (
    <View style={{ flex: 1, backgroundColor: "pink" }}>
      <ButtonAppBar></ButtonAppBar>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.text}>Hello React</Text>
      </View>
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
