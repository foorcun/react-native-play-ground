import { StyledEngineProvider } from "@mui/material";
import { style } from "@mui/system";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  Pressable,
  Dimensions,
  // TouchableOpacity,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

// https://www.youtube.com/watch?v=ccAilrI0IxA

export function AnimatedModal(props) {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const { height } = Dimensions.get("window");

  const color = animation.interpolate({
    inputRange: [0, 0.2, 1.8, 2],
    outputRange: [
      "rgba(255,255,255,0.0)",
      "rgba(45,57,82,0.5)",
      "rgba(45,57,82,0.8)",
      "rgba(255,255,255,0.0)",
    ],
  });

  const openModal = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const saveModal = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [0, -height],
    extrapolate: "clamp",
  });

  const modalTrigger = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const close = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const save = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const open = {
    transform: [{ scale: openModal }, { translateY: saveModal }],
  };

  const background = {
    backgroundColor: color,
  };

  return (
    <View style={[styles.container, styles.center]}>
      <View style={[styles.shadowButton, styles.center]}>
        <TouchableOpacity
          style={[styles.mainButton, styles.center]}
          //   onPress={() => console.log("react")}
          onPress={modalTrigger}
        >
          <Text style={styles.text}>Open</Text>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[styles.background, background]}
        pointerEvents="auto"
      >
        <Animated.View style={[styles.background, open]}>
          <View style={[styles.wrap]}>
            <Text style={[styles.text, styles.helloText]}>Hello !</Text>
            <Text style={[styles.text, styles.moreText]}>
              We love react. It's the best mobile UI framework. We are gonna be
              the best developers. Learn react everyday.
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={[styles.modalButton, styles.center]}
                onPress={close}
              >
                <Text style={styles.text}>Close</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.center]}
                onPress={save}
              >
                <Text style={[styles.text]}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    textAlign: "center",
    fontSize: 24,
  },
  modalButton: {
    backgroundColor: "transparent",
    borderRadius: 100,
    borderColor: "#ffffff",
    marginTop: 64,
    borderWidth: 1,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 25,
    paddingRight: 25,
    marginHorizontal: 5,
    flex: 1,
  },
  moreText: {
    textAlign: "center",
    marginTop: 64,
  },
  helloText: {
    fontSize: 51.2,
    textAlign: "center",
    marginTop: 20,
  },
  wrap: {
    padding: 20,
    margin: 20,
    borderRadius: 8,
    backgroundColor: "#2d3953",
    shadowColro: "#4048bf",
    shadowOffset: {
      width: 8.4,
      height: 8.4,
    },
    shadowOpacity: 0.74,
    shadowRadius: 30,
    elevation: 10,
  },
  text: {
    fontSize: 28.8,
    color: "#ecf0f9",
    fontWeight: "600",
    // fontFamily: "Avenir",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  shadowButton: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 105,
    width: 210,
    height: 80,
    shadowColor: "#4048BF",
    shadowOffset: {
      width: 8.4,
      height: 8.4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10,
  },
  mainButton: {
    zIndex: 10,
    width: 200,
    height: 70,
    borderRadius: 100,
    shadowColor: "#4048BF",
    shadowOffset: {
      width: 6.4,
      height: 6.4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    backgroundColor: "#2D3953",
  },

  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
