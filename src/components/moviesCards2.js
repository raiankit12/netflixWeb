import { Box} from "@mui/material";
import React from "react";
import { img_cdn } from "../utils/constants";

export const MovieCards2 = ({ posterPath }) => {

  return (
    // <Box sx={{  }}>
  <Box sx={{ width:"250px" ,height:"140px",borderRadius:"10px",margin:"40px",bordr:"1px solid black",justifyContent:"space-between",}}>
    
    <img src={img_cdn + posterPath  } alt="posterpath"/>
    
  {/* </Box> */}
</Box>

  );
};

export default MovieCards2;
