import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice"; // Import the toggle slice

export const store = configureStore({
  reducer: {
    toggle: toggleReducer, // Add the toggle reducer
  },
});
