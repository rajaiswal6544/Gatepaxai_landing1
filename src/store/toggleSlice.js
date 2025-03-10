import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {},
  reducers: {
    toggleIntegration: (state, action) => {
      const name = action.payload;
      state[name] = !state[name]; // Toggle state
    },
  },
});

export const { toggleIntegration } = toggleSlice.actions;
export default toggleSlice.reducer;
