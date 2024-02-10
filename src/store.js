// store.js
import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './darkModeSlice';

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
    // other reducers can go here if you have more slices
  },
});
