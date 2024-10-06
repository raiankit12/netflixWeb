import { useEffect } from "react";
import { options } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    const getUpcomingMovies=async ()=>{
        const res=await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",options)
    
        const json=await res.json();
    
        console.log(json.results);

        dispatch(addUpcomingMovies(json.results));
    }
    useEffect(()=>{
      getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;
