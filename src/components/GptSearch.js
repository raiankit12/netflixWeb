import React, { useEffect, useState } from "react";
import { Box, TextField, CircularProgress, Typography } from "@mui/material";
import { CustomButton } from "./Header";
import { options } from "../utils/constants";
import lang from "../utils/langConstant";
import { useSelector } from "react-redux";
import MovieCards from "./MovieCards";
// import { logo, Suported_language } from "../utils/constants";

const GptSearch = () => {
  
  const langKey = useSelector((store) => store.config.lang);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!search) {
      alert("Please enter what would you like to watch.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(search)}`,
        options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      setResults(json.results);
      console.log(json.results);
    } catch (error) {
      setError("Failed to fetch results. Please try again.");
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
    console.log("component rendering")
  },[])

  return (
    <Box sx={{opacity:"5",}}>
      <form
        style={{
          display: "flex",
          width:"60%",
          marginTop: "12rem",
          marginLeft:"16rem",
          //  {md:"16rem",xs:"8rem"},
          backgroundColor: "black",
          justifyContent: "center",
          position: "absolute",
          top: "10px",
          // overflowY: "hidden",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={lang[langKey]?.Gptplaceholder || lang['eng']?.Gptplaceholder }
          sx={{
            backgroundColor: "white",
            color: "black",
            width: "80%",
            margin: "10px",
            // marginTop:"30px",
            borderRadius: "10px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
          }}
        />

        <CustomButton
          sx={{
            margin: "12px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            display: "flex",
            width: "20%",
          }}
          type="submit"
        >
          {lang[langKey]?.Search || lang['eng']?.Search}
        </CustomButton>
      </form>

      {loading && <CircularProgress sx={{ marginTop: "20px" }} />}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "290px" }}>
      {results.map((movie)=>(
        <div style={{margin:"20px"}}>
        <MovieCards movie={movie.id} posterPath={movie.poster_path} title={movie.original_title} backpath={movie.backdrop_path}/>
        <Typography sx={{flexWrap:"wrap"}}>{movie.title}</Typography>
        {/* <Typography>{movie.vote_average}</Typography> */}

        </div>
      ))}
      </Box>
    </Box>
  );
};

export default GptSearch;
