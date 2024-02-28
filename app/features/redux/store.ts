import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducers/appReducer";

export const store = configureStore({
  reducer: appReducer.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))
