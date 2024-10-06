import { Box,} from "@mui/material";
import React from "react";
import { img_cdn } from "../utils/constants";

export const MovieCards = ({ posterPath, title,backpath}) => {
//   console.log("ankit" + posterPath);
  return (
    <Box sx={{  }}>
  <Box sx={{ width:"250px" ,height:"140px",borderRadius:"10px",margin:"1px",border:"1px solid black",overflow:"hidden",justifyContent:"space-between"}}>
    {/* <CardMedia
      component="img"
      height="250"
      image={img_cdn + posterPath}
    /> */}
    <img src={img_cdn + posterPath || backpath} alt="posterpath" />
    {/* {title?<Typography>title</Typography>:""} */}
  </Box>
</Box>

  );
};

export default MovieCards;
