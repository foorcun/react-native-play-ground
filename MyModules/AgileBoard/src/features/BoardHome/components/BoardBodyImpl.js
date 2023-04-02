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

// import Issues from "../../../../assets/mock_data/issues.json";
import { StatusEnums } from "../../../../assets/mock_data/StatusEnums.js";

import { useDispatch, useSelector } from "react-redux";
import { selectCardsTODO } from "../../../store/issuesSlice";
// export default class App extends Component {

//   componentDidMount() {
// 		setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
// 	}

import Products from "../../../../assets/mock_data/products";

const { width, height } = Dimensions.get("window");

export const BoardBodyImpl = () => {
  const issues = useSelector((state) => state.issues.items);
  // console.warn(issues);

  // const cardDatasToDooo = useSelector(selectCardsTODO);
  // console.warn();

  const cardDatasToDo = issues.filter(
    // (issue) => issue.status == "To Do"
    (issue) => issue.status === StatusEnums.TODO
  );

  const cardDatasInProgress = issues.filter(
    // (issue) => issue.status == "To Do"
    (issue) => issue.status === StatusEnums.INPROGRESS
  );

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
      {/* {cardDatasToDoProvider(
        Issues.issues.filter(
          // (issue) => issue.status == "To Do"
          (issue) => issue.status === StatusEnums.TODO
        )
      )} */}
      <BoardColumn
        key="inProgress"
        title="inProgress"
        // cardDatas={cardDatasInProgress}
        cardDatas={issues.filter(
          (issue) => issue.status == "To Do"
          // (issue) => issue.status === StatusEnums.INPROGRESS
        )}
      ></BoardColumn>

      <BoardColumn key="hepsi" title="hepsi" cardDatas={issues}></BoardColumn>
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
