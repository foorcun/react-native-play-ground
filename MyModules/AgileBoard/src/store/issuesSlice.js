import { createSlice, createSelector } from "@reduxjs/toolkit";
import issues from "../../assets/mock_data/issues";
import { StatusEnums } from "../../assets/mock_data/StatusEnums";

const initialState = {
  items: issues, // array olarak degil json object icinde issues arrayi var
  selectedIssueId: null,
};

export const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    setSelectedIssueId: (state, action) => {
      const newIssueId = action.payload.newIssueId;
      console.warn("setSelectedIssue reducer " + newIssueId);

      state.selectedIssueId = newIssueId;

      // state.selectedIssueId = state.items.find(
      //   (issue) => (issue.id = newIssueId)
      // );
    },
    setIssueTitle: (state, action) => {
      // console.warn(
      state.items.find((item) => item.id === action.payload.issue.id).title =
        action.payload.newTitle;
      // );
      // state.items.find((item) => item.id === action.payload.issue.id).title =
      //   action.payload.newTitle;
      // action.payload.issue.title =
    },
  },
});

// export const selectIsuesTODO = (state) =>
//   state.issues.items.filter((issues) => {
//     issues.status === StatusEnums.TODO;
//   });

export const selectSelectedIssue = (state) => {
  return state.issues.items.find(
    (item) => item.id === state.issues.selectedIssueId
  );
  // console.warn(state.issues.items);
  // console.warn("selectSelectedIssue a basildi");
};

export const selectIsuesTODO = (state) => {
  // console.warn(state.issues.items.length);
  // return state.issues.items[0].status;
  // return state.issues.items[0].status === StatusEnums.TODO;

  return state.issues.items.filter((item) => {
    return item.status === StatusEnums.TODO;
  });
};

export const selectIssuesInPROGRESS = (state) =>
  state.issues.items.filter((item) => item.statues === StatusEnums.INPROGRESS);
