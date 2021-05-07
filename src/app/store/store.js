import { configureStore } from '@reduxjs/toolkit';
import expencesReducer from './reducers/expencesReducer'

export const store = configureStore({
  reducer: {
    expensesReducer: expencesReducer
  },
});
