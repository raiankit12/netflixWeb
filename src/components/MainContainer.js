import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

export const MainContainer = () => {
    const movies= useSelector(store=>store?.movies?.nowplayingMovies);
    console.log(movies)
    if(!movies) return;

    const mainMovies=movies[0];
  const {original_title,overview,id}=mainMovies;
  console.log(id,)
  return (
    <box>
        
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieid={id} />
    </box>
  )
}


export default MainContainer;