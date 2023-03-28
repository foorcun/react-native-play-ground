import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Dimensions, Text } from "react-native";
//import { Constants } from 'expo';

const { width } = Dimensions.get("window");

// export default class App extends Component {

//   componentDidMount() {
// 		setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
// 	}
export const BoardCard = () => {
  return (
    <ScrollView
      //   ref={(scrollView) => {
      //     this.scrollView = scrollView;
      //   }}
      //   pagingEnabled={true}
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.container}
      //pagingEnabled={true}
      horizontal={false}
      //   decelerationRate={0}
      //   decelerationRate="fast"
      snapToInterval={width - 60}
      snapToAlignment={"center"}
      contentInset={{
        top: 0,
        left: 30,
        bottom: 0,
        right: 30,
      }}
    >
      <View style={styles.view}></View>
      <View style={styles.view2} />
      <View style={styles.view2} />
      {/* <View style={styles.view2} /> */}
      {/* <View style={styles.view2} /> */}
      {/* <View style={styles.view2} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  view: {
    marginTop: 5,
    backgroundColor: "pink",
    // backgroundColor: "blue",
    // width: width - 80,
    margin: 10,
    padding: 10,
    height: 200,
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
