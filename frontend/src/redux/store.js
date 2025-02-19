import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import diaryReducer from './diary/diarySlice';
import calculatorReducer from './calculator/calculatorSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    diary: diaryReducer,
    calculator: calculatorReducer,
  },
});