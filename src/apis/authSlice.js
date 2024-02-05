/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/api/auth/user/self`, {
        headers: {
            authorization: `Bearer ${auth?.accessToken}`,
        },
    });
    return res.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        user: {},
        isAuthenticated: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = null;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = {};
            state.error = action.error.message;
        });
    },
});
export default authSlice.reducer;
