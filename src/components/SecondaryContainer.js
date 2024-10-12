import React from 'react'
import MovieList from './MovieList';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

export const SecondaryContainer = () => {

  const {nowplayingMovies,popularMovies,topRatedMovies,upcomingMovies}= useSelector(store=>store?.movies)
  
  console.log(topRatedMovies);
  return (
    <Box sx={{positon:"relative",backgroundColor:"black",justifyContent:"space-between"}}>
      <MovieList title="Now Playing" movies={nowplayingMovies} />
      <MovieList title="Popular" movies={popularMovies}/>
      <MovieList title="Top Rated" movies={topRatedMovies}/>
      <MovieList title="Upcoming" movies={upcomingMovies}/>
    </Box>
  )
}

export default SecondaryContainer;

