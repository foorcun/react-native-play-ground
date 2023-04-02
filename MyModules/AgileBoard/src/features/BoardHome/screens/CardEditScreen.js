import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

import { issuesSlice, selectSelectedIssue } from "../../../store/issuesSlice";
import { useSelector, useDispatch } from "react-redux";

// export const CardEditScreen = (navigation, routes) => {
export const CardEditScreen = () => {
  // console.warn(props);

  // const [title, setTitle] = useState(props.route.params.card.title);
  const selectedIssue = useSelector(selectSelectedIssue);
  const dispatch = useDispatch();
  const updateTitle = (newTitle) =>
    dispatch(
      issuesSlice.actions.setIssueTitle({
        issue: selectedIssue,
        newTitle,
      })
    );

  if (selectedIssue === null) selectedIssue = { title: "issue seciniz" };

  // setCardTitle((card, newTitle) => (card.title = newTitle));

  // const title = new String(selectedIssue.title);
  const title = selectedIssue.title;

  return (
    <View style={styles.container}>
      {/* <Text>{props.route.params.card.title}</Text> */}
      {/* {dropDownButton()} */}
      {editableTitleText(selectedIssue.title, updateTitle)}
      {/* <Text>{selectedIssue.title}</Text>
      <TextInput
        style={styles.input}
        // placeholder={props.route.params.card.title}
        value={title}
        // value={selectedIssue.title}
        // onChangeText={(newTitle) => props.route.params.updateMyName(newTitle)}
        // onChangeText={(newTitle) => console.warn(newTitle)}
        // onChangeText={(newTitle) =>
        //   setCardTitle(props.route.params.card, newTitle)
        // }
        // onChangeText={(newTitle) => setTitle(newTitle)}
        // onChangeText={setTitle}
        ////
        // onChangeText={(newTitle) =>
        //   dispatch(
        //     issuesSlice.actions.setIssueTitle({
        //       issue: selectedIssue,
        //       newTitle,
        //     })
        //   )
        // }
      /> */}
      <StatusBar style="auto" />
    </View>
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    margin: 10,
    padding: 8,
    width: 200,
  },
});

const editableTitleText = (selectedIssueTitle, saveFunction) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const [text, onChangeText] = React.useState(selectedIssueTitle);

  return isEditMode === false ? (
    <Pressable key="title" onPress={() => setIsEditMode(true)}>
      <Text>{selectedIssueTitle}</Text>
    </Pressable>
  ) : (
    // <Pressable key="edit" onPress={() => setIsEditMode(false)}>
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Pressable key="cancel" onPress={() => setIsEditMode(false)}>
          <View
            style={{
              padding: 10,
            }}
          >
            <Text>Cancel</Text>
          </View>
        </Pressable>
        <Pressable
          key="save"
          onPress={() => {
            saveFunction(text);
            setIsEditMode(false);
          }}
        >
          <View
            style={{
              padding: 10,
            }}
          >
            <Text>Save</Text>
          </View>
        </Pressable>
      </View>
    </View>
    // </Pressable>
  );
};

// const dropDownButton = () => {
//   return (
//     <View>
//       <Text>pop up</Text>
//     </View>
//   );
// };

// const bottomPopup = () => {
//   return <Modal animationType="fade" transparent={true} visible={show}></Modal>;
// };
