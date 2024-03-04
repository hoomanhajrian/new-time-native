import { createSlice } from "@reduxjs/toolkit";

const initialState: { mode: "dark" | "light" | "null" } = {
  mode: "null",
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState: initialState,
  reducers: {
    darkMode: (state) => {
      state.mode = "dark";
    },
    lightMode: (state) => {
      state.mode = "light";
    },
  },
});

export const { darkMode, lightMode } = appSlice.actions;
export const appMode = (state: any) => state.appSlice.mode;
