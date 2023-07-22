// action.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../lib/api/feature-auth/authService';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  try {
    const response = await authService.login(credentials);
    return response;
  } catch (error) {
    throw new Error('Login failed. Please check your credentials.');
  }
});

export const accessUser = createAsyncThunk('auth/authorize', async (token) => {
  try {
    const response = await authService.authorize(token);
    return response;
  } catch (error) {
    throw new Error('Authorization failed. Please check your credentials.');
  }
});
