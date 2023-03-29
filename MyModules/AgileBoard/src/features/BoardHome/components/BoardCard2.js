import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Dimensions, Text } from "react-native";
//import { Constants } from 'expo';
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../../infrastructure/theme/colors";

const { width } = Dimensions.get("window");

export const BoardCard2 = (props) => {
  return (
    // <View style={{ backgroundColor: "green" }}>
    <View>
      <View style={styles.view}>
        {/* <Text>Card Title</Text> */}
        <View>
          <Text>{props.card.title}</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 5 }}>
          <View
            style={{
              backgroundColor: colors.bg.icon,
              width: 24,
              padding: 5,
              alignItems: "center",
            }}
          >
            <FontAwesome name="bookmark" size={16} color="white" />
          </View>
          <View>
            <Text>{props.card.id}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  view: {
    marginTop: 5,
    // backgroundColor: "pink",
    backgroundColor: colors.bg.primary,
    // width: width - 80,
    margin: 10,
    padding: 10,
    // height: 200,
    borderRadius: 10,
    // paddingHorizontal: 30,
  },
  view2: {
    // marginTop: 100,
    backgroundColor: "red",
    // width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
});
