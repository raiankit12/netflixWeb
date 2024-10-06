import React, { useRef } from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MovieCards from "./MovieCards";

export const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null); 
  const cardWidth = 250; 
  const visibleCards = 5; 
  const scrollAmount = cardWidth * visibleCards; 
  const scroll = (direction) => {
    if (scrollRef.current) {
      const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

      if (direction === "right") {
        
        if (scrollRef.current.scrollLeft + scrollAmount >= maxScrollLeft) {
          scrollRef.current.scrollLeft = maxScrollLeft; 
        } else {
          scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      } else {
        
        if (scrollRef.current.scrollLeft - scrollAmount <= 0) {
          scrollRef.current.scrollLeft = 0; 
        } else {
          scrollRef.current.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }
  };

  return (
    <Box sx={{ backgroundColor: "transparent", marginLeft: "0rem", position: "relative",marginTop:{md:"10px",xs:"150px"}}}>
      <Typography variant="h4" gutterBottom sx={{ color: "white",marginLeft:"30px" }}>
        {title}
      </Typography>

      <Paper sx={{ backgroundColor: "black", padding: "1rem", position: "relative" }}>
       
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            top: "40%",
            left: "1rem",
            zIndex: 10,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* Scrollable Box */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            overflowX: "hidden",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#555",
            },
          }}
        >
          {movies?.map((movie) => (
            <Box
              key={movie.id}
              sx={{
                minWidth: `${cardWidth}px`, 
                marginRight: "1rem", 
                overflow:"hidden"
              }}
            >
              <MovieCards posterPath={movie.poster_path} />
            </Box>
          ))}
        </Box>

        
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            top: "40%",
            right: "2rem",
            zIndex: 10,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default MovieList;
