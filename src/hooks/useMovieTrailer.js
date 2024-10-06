import { useEffect, useState } from "react";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
// import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
const useMovieTrailer=({movieid})=>{
    console.log(movieid);
    // const [trailerId,setTrailerId] =useState()
    const dispatch=useDispatch();
    const getMoviesVideos = async () => {
        const response = await fetch(
           "https://api.themoviedb.org/3/movie/"+movieid+"/videos?language=en-US",
            options // Ensure options include your API key and necessary heade
        );

        console.log(response);
        const json = await response.json();
        // console.log(json);
        console.log(json);
    
        const filterTrailer= json?.results?.filter(item=>item?.type==='Trailer');
        console.log(filterTrailer);
        const trailer= filterTrailer?.length?filterTrailer[0]:json?.results[0];
        console.log("trailer",trailer);
        // setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer))
      };
    
      useEffect(() => {
        getMoviesVideos();
      }, []);

}

export default useMovieTrailer;
