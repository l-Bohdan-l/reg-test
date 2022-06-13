import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerApi,
  logIn,
  logOut,
//   fetchCurrentUser,
//   token,
} from '../../services/userApi/userApi';

export const registraion = createAsyncThunk(
  'auth/registration',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await registerApi(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await logIn(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logOut();
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
