import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../reducer/data/reducer';

export const store = configureStore({
  reducer: {
    dataPicker: dataReducer
  },
});
