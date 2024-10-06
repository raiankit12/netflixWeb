import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        lang:"English",
    },
    reducers:
    {
        toggleLang(state,action)
        {
           state.lang=action.payload; 
        },
    }
})

export const {toggleLang} =configSlice.actions;
export default configSlice.reducer;