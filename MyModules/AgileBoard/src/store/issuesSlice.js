import { createSlice } from "@reduxjs/toolkit";
import issues from "../../assets/mock_data/issues";

const initialState = {
  issues: issues, // array olarak degil json object icinde issues arrayi var
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
