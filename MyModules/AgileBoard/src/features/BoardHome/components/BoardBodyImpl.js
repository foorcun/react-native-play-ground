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
//import { Constants } from 'expo';

import { colors } from "../../../infrastructure/theme/colors";
import { theme } from "../../../infrastructure/theme";
import { BoardColumn } from "./BoardColumn";

// export default class App extends Component {

//   componentDidMount() {
// 		setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
// 	}

const { width, height } = Dimensions.get("window");

export const BoardBodyImpl = () => {
  const cardDatasToDo = [
    { id: "1", title: "Title 1" },
    { id: "2", title: "Title 2 bu dnun title i coooooooookkkkk uzunnnnnnnnn" },
    { id: "3", title: "Title 3" },
    { id: "4", title: "Title 4" },
  ];

  const cardDatasInProgress = [
    { id: "1", title: "Title 1 cardDatasInProgress" },
    { id: "2", title: "Title 2 bu dnun title i coooooooookkkkk uzunnnnnnnnn" },
    { id: "3", title: "Title 3" },
    { id: "4", title: "Title 4" },
  ];

  function cardDatasToDoProvider(cardDatas) {
    // console.warn(cardDatasToDo);

    return (
      <BoardColumn
        key="cardDatasToDo"
        title="To Do"
        cardDatas={cardDatas}
      ></BoardColumn>
    );
  }
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
      {/* {cardDatasToDo.map((card) => {
              return <BoardCard2 key={card.id} title={card.title}></BoardCard2>;
      

            })} */}
      {/* {(cardDatasToDo) => {
        console.warn(cardDatasToDo);

        return (
          <BoardColumn
            key="cardDatasToDo"
            cardDatasToDo={cardDatasToDo}
          ></BoardColumn>
        );
      }} */}
      {cardDatasToDoProvider(cardDatasToDo)}
      <BoardColumn
        key="inProgress"
        title="inProgress"
        cardDatas={cardDatasInProgress}
      ></BoardColumn>
      {/* <BoardColumn></BoardColumn> */}
      {/* <BoardColumn></BoardColumn> */}
      {/* <View style={styles.view2} /> */}
      {/* <View style={styles.view3} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},

  // view2: {
  //   // marginTop: 100,
  //   backgroundColor: "red",
  //   width: width - 80,
  //   margin: 10,
  //   height: 200,
  //   borderRadius: 10,
  //   //paddingHorizontal : 30
  // },
  // view3: {
  //   // marginTop: 100,
  //   backgroundColor: "#F1F6F5",
  //   // backgroundColor: "blue",
  //   width: width - 80,
  //   margin: 10,
  //   height: 200,
  //   borderRadius: 10,
  //   //paddingHorizontal : 30
  // },
});
