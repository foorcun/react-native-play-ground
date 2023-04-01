import { configureStore } from "@reduxjs/toolkit";
import { issuesSlice } from "./issuesSlice";
import { productsSlice } from "./productsSlice";

export const store = configureStore({
  reducer: {
    issues: issuesSlice.reducer,
    products: productsSlice.reducer,
  },
  // buraya middleware gelecek
});
