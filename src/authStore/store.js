import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../apis/authSlice';
import facultyReducer from '../apis/facultySlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        faculty: facultyReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export default store;
