import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme";
import searchSlice from "./slices/search";
import regionSlice from "./slices/region";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    search: searchSlice,
    region: regionSlice,
  },
});
export default store;
