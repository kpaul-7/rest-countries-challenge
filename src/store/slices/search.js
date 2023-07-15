import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "",
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearch(state, action) {
      state.country = action.payload;
    },
  },
});

export const { changeSearch } = searchSlice.actions;

export default searchSlice.reducer;
