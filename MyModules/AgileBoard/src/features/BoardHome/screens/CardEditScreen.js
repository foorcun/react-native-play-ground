import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export const CardEditScreen = (props) => {
  // console.warn(props);
  return (
    <View style={styles.container}>
      <Text>{props.route.params.card.title}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.route.params.card.title}
        // onChangeText={(newTitle) => props.route.params.updateMyName(newTitle)}
        onChangeText={(newTitle) => console.warn(newTitle)}
      />

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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    margin: 10,
    padding: 8,
    width: 200,
  },
});
