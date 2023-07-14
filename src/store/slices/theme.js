import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: "Light",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      if (state.theme === "Light") {
        state.theme = "Dark";
      } else {
        state.theme = "Light";
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
