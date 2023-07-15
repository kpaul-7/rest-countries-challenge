import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  regionName: "none",
};

const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    changeRegion(state, action) {
      state.regionName = action.payload;
    },
  },
});

export const { changeRegion } = regionSlice.actions;
export default regionSlice.reducer;
