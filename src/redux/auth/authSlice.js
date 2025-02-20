import { createSlice } from '@reduxjs/toolkit';
import testUsers from '../../data/testUsers.json';

const findTestUser = (email) => 
  testUsers.testUsers.find(user => user.email === email);

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    testLogin: (state, action) => {
      const testUser = findTestUser(action.payload);
      if (testUser) {
        state.user = {
          email: testUser.email,
          name: testUser.name,
          dailyCalorieIntake: testUser.dailyCalorieIntake
        };
        state.token = testUser.token;
        state.isLoggedIn = true;
      }
    }
  }
});

export const { setCredentials, testLogin } = authSlice.actions;
export const authReducer = authSlice.reducer;
export default authSlice.reducer;