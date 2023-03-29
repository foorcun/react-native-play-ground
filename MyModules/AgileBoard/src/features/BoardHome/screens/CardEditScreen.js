import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const CardEditScreen = (props) => {
  //   console.warn(props.route.params);
  return (
    <View style={styles.container}>
      <Text>{props.route.params.card.title}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
