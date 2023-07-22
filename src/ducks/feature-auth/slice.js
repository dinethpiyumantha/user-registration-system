// slice.js
import { createSlice } from '@reduxjs/toolkit';
import { login } from './actions';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    navigate: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access_token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
