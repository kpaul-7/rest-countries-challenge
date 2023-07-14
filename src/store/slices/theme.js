import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: localStorage.getItem("theme") || "Light",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      if (state.theme === "Light") {
        state.theme = "Dark";
        localStorage.setItem("theme", "Dark");
      } else {
        state.theme = "Light";
        localStorage.setItem("theme", "Light");
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
