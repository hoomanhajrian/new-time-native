import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "@/redux/slices/appSlice";

export const store = configureStore({
  reducer: appSlice.reducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));
