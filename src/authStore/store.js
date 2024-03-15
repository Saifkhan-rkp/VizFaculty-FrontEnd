import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../apis/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
export default store;
