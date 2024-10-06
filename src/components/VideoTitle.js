import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import React from 'react'

export const VideoTitle = (props) => {
  const [open, setOpen] = React.useState(false);
  console.log(props.overview_movie)

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    console.log(props.original)
  return (
    <Box sx={{width:"100%",paddingY:"15.8rem",paddingX:"3rem",position:"absolute",backgroundImage: "linear-gradient(to right, transparent,black)", // Gradient from black to red
     }}>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {props.overview}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
          
        </DialogActions>
      </Dialog>
    <Typography variant="h2" sx={{color:'white',width:{md:"40%",xs:"100%"}}}  >{props.title}</Typography>
    <Typography sx={{color:'white',fontSize:"18px",width:{md:"45%",xs:"100%"}}} >{props.overview}</Typography>
    
    <Box sx={{marginTop:"2rem"}}>
        <Button variant='contained' sx={{width:"5.5rem",color:"black",background:"white",'&:hover':{background:"grey"}}} >▶ Play</Button>
        <Button variant="contained" sx={{marginLeft:"1rem",width:"8.5rem",background:"grey",'&:hover':{background:"grey"}}} onClick={handleClickOpen}>More Info🔽</Button>
    </Box>
</Box>
  )
}

export default VideoTitle;
