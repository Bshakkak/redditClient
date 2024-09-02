import { configureStore } from '@reduxjs/toolkit';
import subredditsSliceReducer from '../Slices/subredditsSlice';


export const store = configureStore({
  reducer: {
    subredditsSlice: subredditsSliceReducer
  },
});
