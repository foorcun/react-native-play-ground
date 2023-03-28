import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is account screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
        color="#841584"
      />
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
