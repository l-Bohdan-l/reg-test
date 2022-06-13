/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-unresolved
import { createSlice } from '@reduxjs/toolkit';
import {
  registraion,
  login,
  logout,
} from './auth-operations';

const initialState = {
  userData: {
    // name: '',
    email: '',
  },
  token: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registraion.fulfilled, (state, action) => {
      state.userData = action.payload.user;
      state.isLogin = true;
      state.token = action.payload.token;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.userData = action.payload.user;
      state.isLogin = true;
      state.token = action.payload.token;
    });
    // eslint-disable-next-line no-unused-vars
    builder.addCase(logout.fulfilled, (state, action) => {
      state.userData = { name: '', email: '' };
      state.isLogin = false;
      state.token = null;
    });
    // builder.addCase(getCurrentUser.fulfilled, (state, action) => {
    //   state.userData = { ...action.payload };
    //   state.isLogin = true;
    // });
  },
});

export default authSlice.reducer;
