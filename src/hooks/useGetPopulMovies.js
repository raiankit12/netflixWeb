import { useEffect, useState } from "react";
import { options } from "../utils/constants";
import { addPopulMovies, addTrailerVideo } from "../utils/movieSlice";
// import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
const useGetPopulMovies = () => {
  const dispatch = useDispatch();
  const GetPopulMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options // Ensure options include your API key and necessary heade
    );

    const json = await response.json();

    console.log(json.results);

    // setTrailerId(trailer.key);
    dispatch(addPopulMovies(json.results));
  };

  useEffect(() => {
    GetPopulMovies();
  }, []);
};

export default useGetPopulMovies;
