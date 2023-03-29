import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";

import { AntDesign, Feather } from "@expo/vector-icons";

import { colors } from "../../../infrastructure/theme/colors";
import { BoardCard2 } from "./BoardCard2";

const { width, height } = Dimensions.get("window");

export const BoardColumn = (props) => {
  const onCreatePressed = (name) => console.warn(name);
  //   const cardDatasToDo = props.cardDatasToDo;
  //   console.warn(cardDatasToDo);

  //   const cardDatas = [
  //     { id: "1", title: "Title 1" },
  //     { id: "2", title: "Title 2 bu dnun title i coooooooookkkkk uzunnnnnnnnn" },
  //     { id: "3", title: "Title 3" },
  //   ];
  //   const cardDatas = cardDatasToDo;
  const cardDatas = props.cardDatas;

  return (
    <View style={styles.view}>
      <View style={{ backgroundColor: colors.bg.secondary }}>
        <Text
          style={{
            padding: 10,
            color: colors.text.primary,
          }}
        >
          {/* To Do */}
          {props.title}
        </Text>
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
            backgroundColor: colors.bg.secondary,
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
            {/* <BoardCard2></BoardCard2> */}
            {cardDatas.map((card) => {
              return <BoardCard2 key={card.id} title={card.title}></BoardCard2>;
            })}
          </ScrollView>
        </View>
        <View // top holderView
          style={{
            //   margin: 10,

            padding: 10,
            // backgroundColor: "purple",
            backgroundColor: colors.bg.secondary,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* <Button title="Create" /> */}
          <Pressable
            onPress={() =>
              onCreatePressed("i will be developed to create Issue")
            }
          >
            <View
              style={{
                padding: 10,
                // alignContent: "center",
                flexDirection: "row",
                gap: 10,
              }}
            >
              {/* <View style={{ backgroundColor: "red" }}> */}
              <View>
                <AntDesign name="plus" size={24} color={colors.text.primary} />
              </View>
              <View
                style={{
                  // backgroundColor: "green",
                  paddingTop: 3,
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    color: colors.text.primary,
                  }}
                >
                  Create
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() =>
              onCreatePressed("i will be developed to help to add files")
            }
          >
            <View
              style={{
                // backgroundColor: "red",
                // alignItems: "center",
                // alignSelf: "flex-end",
                // alignSelf: "stretch",
                // justifyContent: "flex-start",
                // justifyContent: 'flex-end'
                justifyContent: "center",
              }}
            >
              <Feather name="paperclip" size={24} color={colors.text.primary} />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
