import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Modal, Button, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// https://www.youtube.com/watch?v=Nw1St1h5Ylc

export const BottomModal = () => {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <SafeAreaView style={styles.fill}>
      <Button title="Show" onPress={show} />

      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={hide}
        transparent
      >
        <SafeAreaView>
          <Pressable style={styles.upper} onPress={hide} />
          <Button title="hide" onPress={hide} />
        </SafeAreaView>
      </Modal>
      <StatusBar style="auto" />
    </SafeAreaView>
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
  fill: { flex: 1 },
  grey: { backgroundColor: "#DDD" },
  upper: { height: "85%", backgroundColor: "#ddd", opacity: 0.5 },
  lower: { flex: 1, backgroundColor: "white" },
});
