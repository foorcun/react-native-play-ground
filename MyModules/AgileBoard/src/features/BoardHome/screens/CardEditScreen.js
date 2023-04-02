import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { issuesSlice, selectSelectedIssue } from "../../../store/issuesSlice";
import { useSelector, useDispatch } from "react-redux";

// export const CardEditScreen = (navigation, routes) => {
export const CardEditScreen = () => {
  // console.warn(props);

  // const [title, setTitle] = useState(props.route.params.card.title);
  const selectedIssue = useSelector(selectSelectedIssue);
  const dispatch = useDispatch();

  if (selectedIssue === null) selectedIssue = { title: "issue seciniz" };

  // setCardTitle((card, newTitle) => (card.title = newTitle));

  return (
    <View style={styles.container}>
      {/* <Text>{props.route.params.card.title}</Text> */}
      <Text>{selectedIssue.title}</Text>
      <TextInput
        style={styles.input}
        // placeholder={props.route.params.card.title}
        // value={title}
        value={selectedIssue.title}
        // onChangeText={(newTitle) => props.route.params.updateMyName(newTitle)}
        // onChangeText={(newTitle) => console.warn(newTitle)}
        // onChangeText={(newTitle) =>
        //   setCardTitle(props.route.params.card, newTitle)
        // }
        // onChangeText={(newTitle) => setTitle(newTitle)}
        // onChangeText={setTitle}
        onChangeText={(newTitle) =>
          dispatch(
            issuesSlice.actions.setIssueTitle({
              issue: selectedIssue,
              newTitle,
            })
          )
        }
      />

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
