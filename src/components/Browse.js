import { Box } from "@mui/material";
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopulMovies from "../hooks/useGetPopulMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch"; 
import { useSelector } from "react-redux";
// import { bgImg } from "../utils/constants";
const Browse = () => {
  useGetNowPlayingMovies();
  useGetPopulMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const { GptSearch:showGpt} = useSelector((store) => store.gpt);  

  console.log(GptSearch)
  return (
    <Box sx={{overflow:"hidden",position:!showGpt?"relative":"static",background:"black"}}>
      <Header  />
      {showGpt? (
        <GptSearch />
      ) : (
        <>
        {/* <Box sx={{overflow:"hidden",postion:"relative"}}> */}
          <MainContainer />
          <SecondaryContainer />
          {/* </Box> */}
        </>
      )}
    </Box>
  );
};

export default Browse;
