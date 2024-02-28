import { createSlice } from '@reduxjs/toolkit'

const initialState:{mode:'dark'|"light"} =  {
  mode: "light"
};

export const appReducer = createSlice({
  name: 'appReducer',
  initialState:initialState,
  reducers: {
    darkMode: state => {
      state.mode = "dark";
    },
    lightMode: state =>{
        state.mode = "light";
    }
  }
})

export const { darkMode, lightMode } = appReducer.actions;
