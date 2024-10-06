import { createSlice } from "@reduxjs/toolkit";
// import reducer from "./userSlice";


const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowplayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>
        {
        state.nowplayingMovies= action.payload
        },

        addTrailerVideo(state,action)
        {
            state.trailerVideo=action.payload;
        },
        addPopulMovies(state,action)
        {
            state.popularMovies=action.payload;
        }
        ,
        addTopRatedMovies(state,{payload})
        {
            state.topRatedMovies=payload;
        },

        addUpcomingMovies(state,{payload})
        {
            state.upcomingMovies=payload;
            
        }
       

    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopulMovies,addTopRatedMovies,addUpcomingMovies}=movieSlice.actions;
export default movieSlice.reducer;