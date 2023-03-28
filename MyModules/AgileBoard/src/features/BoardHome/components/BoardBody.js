import { padding } from "@mui/system";
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  Button,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { BoardCard2 } from "./BoardCard2";
//import { Constants } from 'expo';

const { width, height } = Dimensions.get("window");

// export default class App extends Component {

//   componentDidMount() {
// 		setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
// 	}
export const BoardBody = () => {
  return (
    <ScrollView
      //   ref={(scrollView) => {
      //     this.scrollView = scrollView;
      //   }}
      pagingEnabled={true}
      style={styles.container}
      //pagingEnabled={true}
      horizontal={true}
      //   decelerationRate={0}
      decelerationRate="fast"
      snapToInterval={width - 60}
      snapToAlignment={"center"}
      contentInset={{
        top: 0,
        left: 30,
        bottom: 0,
        right: 30,
      }}
    >
      {/* To do column */}
      <View style={styles.view}>
        <View style={{ backgroundColor: "grey" }}>
          <Text style={{ padding: 10 }}>To Do </Text>
        </View>

        {/* <FlatList
        data={
            data
        }
        renderItem={(item)=>{}}
        >

        </FlatList> */}
        <View
          style={{
            flexDirection: "column",
            // backgroundColor: "yellow",
            flex: 1,
            // height: height - 100,
            // height: 400,
            // margin: 10,
            // gap: 10,
          }}
        >
          <View
            style={{
              //   backgroundColor: "orange",
              backgroundColor: "grey",
              padding: 10,
            }}
          >
            <ScrollView
              contentContainerStyle={
                {
                  // flexWrap: "wrap",
                }
              }
            >
              <BoardCard2></BoardCard2>
            </ScrollView>
          </View>
          <View
            style={{
              //   margin: 10,

              padding: 10,
              //   backgroundColor: "purple",
              backgroundColor: "grey",
            }}
          >
            <Button title="Create" />
          </View>
        </View>
      </View>

      <View style={styles.view2} />
      <View style={styles.view3} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  view: {
    // marginTop: 100,
    // backgroundColor: "#F1F6F5",
    // backgroundColor: "dodgerblue",
    backgroundColor: "white",
    width: width - 80,
    margin: 10,
    height: height - 200,
    // padding: 10,
    // flexWrap: "wrap",
    borderRadius: 10,
    // paddingHorizontal: 30,
  },
  view2: {
    // marginTop: 100,
    backgroundColor: "red",
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
  view3: {
    // marginTop: 100,
    backgroundColor: "#F1F6F5",
    // backgroundColor: "blue",
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
});
