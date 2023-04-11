import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import BottomSheet from "@gorhom/bottom-sheet";

export const BottomSheetModal = () => {
  return (
    <View style={styles.container}>
      <BottomSheet
        // ref={bottomSheetRef}
        index={1}
        snapPoints={["25%", "50%"]}
        // onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
