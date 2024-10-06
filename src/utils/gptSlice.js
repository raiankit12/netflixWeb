import {createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
    name:"gpt",
    initialState:{
       GptSearch:false,
    },

    reducers:{
        showGptSearch(state)
        {
            state.GptSearch=!state.GptSearch;
            // console.log( state.GptSearch=!state.GptSearch)
        }
    },

});

export const {showGptSearch}= gptSlice.actions;

export default gptSlice.reducer;