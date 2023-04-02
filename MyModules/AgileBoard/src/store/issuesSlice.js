import { createSlice, createSelector } from "@reduxjs/toolkit";
import issues from "../../assets/mock_data/issues";
import { StatusEnums } from "../../assets/mock_data/StatusEnums";

const initialState = {
  items: issues, // array olarak degil json object icinde issues arrayi var
  selectedIssue: null,
};

export const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    setSelectedIssue: (state, action) => {
      const newIssueId = action.payload;
      state.selectedIssue = state.issues.find(
        (issue) => (issue.id = newIssueId)
      );
    },
  },
});

// export const selectCardsTODO = (state) =>
//   state.issues.items.filter((issues) => {
//     issues.status === StatusEnums.TODO;
//   });

// export const selectCardsTODO = createSelector((state) => {
//   // state.issues.items.filter((issues) => {
//   //   issues.status === StatusEnums.TODO;
//   // });

//   console.warn(state);
// });
