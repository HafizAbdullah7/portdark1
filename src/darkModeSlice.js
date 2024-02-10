// darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    mode: 'dark', // Initial mode set to 'dark'
  },
  reducers: {
    toggleMode: state => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleMode } = darkModeSlice.actions;

export const selectMode = state => state.darkMode.mode;

export default darkModeSlice.reducer;
