import { Box, } from "@mui/material";
import {React} from "react";
// import { API_Options, options } from "../utils/constants";
import { useSelector } from "react-redux";
// import { addTrailerVideo } from "../utils/movieSlice";
import useMovieTrailer from '../hooks/useMovieTrailer';
export const VideoBackground = (movieid) => {
  
  useMovieTrailer(movieid);
  
  const trailerId=useSelector(store=>store.movies.trailerVideo)
  console.log(trailerId);
  // const [trailerId,setTrailerId]= useState()
  // const res=useMovieTrailer(movieid);
  
  

  return (
    <Box sx={{width:'100%',overflow:"hidden",}}>
      <iframe
      width="100%"
      height="750px"
     style={{marginTop:"-100px"}}
          src={"https://www.youtube.com/embed/" + trailerId?.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
      
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </Box>
  );
};

export default VideoBackground;
