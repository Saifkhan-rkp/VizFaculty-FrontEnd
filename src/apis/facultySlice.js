import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    subjects:[]
}

const facultySlice = createSlice({
    name:"faculty",
    initialState,
    reducers:{
        reset:()=> initialState,
        setSubjects(state, action){
            state.subjects = action.payload;
        },
    }
});

export const {
    reset,
    setSubjects
} = facultySlice.actions;

export default facultySlice.reducer;