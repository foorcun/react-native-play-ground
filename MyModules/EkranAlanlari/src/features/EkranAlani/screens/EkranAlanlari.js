import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function EkranAlanlari() {
  const { width } = Dimensions.get("window");
  return (
    <View>
      <Text style={{ padding: 10 }}>row (default)</Text>
      <View
        style={{
          //   flexDirection: "row",
          //   flexDirection: "row-reverse",
          flexDirection: "column",
          //   flexDirection: "column-reverse",
          //   justifyContent: "flex-start",
          justifyContent: "center",
          //   justifyContent: "flex-end",
          width,
          height: width,
          backgroundColor: "whitesmoke",
          //   gap: 10,
        }}
      >
        <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      {/* <Text style={{ padding: 10, marginTop: 10 }}>column</Text>
      <View
        style={{
          flexDirection: "column",
          width,
          height: width,
          backgroundColor: "whitesmoke",
        }}
      >
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",

    // textAlignVertical: "center", // bir degisiklik yapmiyor gibi
  },
});
