import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Dimensions, Text } from "react-native";
//import { Constants } from 'expo';

const { width } = Dimensions.get("window");
import { colors } from "../../../infrastructure/theme/colors";

// export default class App extends Component {

//   componentDidMount() {
// 		setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
// 	}
export const BoardCard2 = (props) => {
  return (
    // <View style={{ backgroundColor: "green" }}>
    <View>
      <View style={styles.view}>
        {/* <Text>Card Title</Text> */}
        <Text>{props.title}</Text>
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
