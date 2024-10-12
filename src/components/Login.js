import {
  Box,
  Button,
  FormControl,
  // FormLabel,
  FormGroup,
  TextField,
  // useTheme,
  Typography,
} from "@mui/material";
import Header from "./Header";
import styled from "@emotion/styled";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bgImg, user_avatar } from "../utils/constants";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "40%",
  left: "35%",
  justifyItems: "center",
  borderRadius: "30px",
  transform: "translate(-50%, -70%)",
  paddingLeft: "32px",
  paddingRight: "32px",
  // marginBottom: "50px",
  paddingTop: "12px",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  color: "black",
  // width: "80%",
  height: "50%",
  maxWidth: 350,
  // paddingTop:'30px'
  [theme.breakpoints.down("md")]:
  {
    left: "23%",
    transform: "translate(-60%, -60%)", 
  },
  [theme.breakpoints.between("xs","sm")]: 
    {
      position: "absolute",
      top: "484px",
      left: "40%",
      justifyItems: "center",
      borderRadius: "20px",
      transform: "translate(-36%, -73%)",
      
      
      /* padding-left: 36px; */
      /* padding-right: 32px; */
      /* padding-top: 12px; */
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      color: "black",
      height: "549px",
      width: "252px"
  
  },

  // [theme.breakpoints.up("md")]: {
  //   maxWidth: "60%", // 60% width for medium screens
  //   top: "40%", // Adjust top for medium screens
  //   paddingLeft: "32px",
  //   paddingRight: "32px",
  // },

  // [theme.breakpoints.up("lg")]: {
  //   maxWidth: "50%", // 50% width for large screens
  //   top: "45%", // Adjust top for large screens
  //   paddingLeft: "40px",
  //   paddingRight: "40px",
  // },

  // [theme.breakpoints.up("xl")]: {
  //   maxWidth: "40%", // 40% width for extra-large screens
  //   top: "50%", // Adjust top for extra-large screens
  //   paddingLeft: "50px",
  //   paddingRight: "50px",
  // },
  
}));

const Login = () => {
  const dispatch = useDispatch();

  const [IsSignInform, setSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const name = useRef(null);

  const email = useRef(null);

  const password = useRef(null);

  // const navigate = useNavigate();

  const toggleSignupform = () => {
    setSignInform(!IsSignInform);
  };

 const handleReset = ()=>{
  const userEmail = email.current.value;
    if (!userEmail) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        setResetEmailSent(true);
        setErrorMessage(null);
      })
      .catch((error) => {
        setErrorMessage(error.message || "Failed to send reset email.");
      });
 }
  const handleBtn = () => {
    // const emailValue = email.current.value;
    // const passwordValue = password.current.value;
    // console.log(email.current.value,name.current.value,password.current.value)
    let message;
    message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!IsSignInform) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user.email);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: user_avatar,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message="this email user id already exist";
          // setErrorMessage(errorCode + "-" + errorMessage);
          setErrorMessage("this email user id already exist");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user",user);
          // navigate("/Browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setErrorMessage(errorCode + " " + errorMessage);
          setErrorMessage("Password is incorrect.Please enter the correct password.")
        });
    }

    // console.log(message);
  };

  return (
    <Box 
    sx={{
      position:
      {
        xs:"static",
        sm:'fixed',
        md:'fixed'
      }
    }}
    >
      <Header />
      <Box sx={{ overflow: "hidden" }}>
        <img src={bgImg} alt="background" />
      </Box>

      <StyledBox>
        <FormControl component="fieldset" sx={{top:{
          // xs:"50px",
          // sm:"20px"
        }}}>
          <form onSubmit={(e) => e.preventDefault()}>
            <FormGroup sx={{ justifyContent: "space-between" }}>
              <Typography
                sx={{
                  color: "white",
                  paddingY: "5px",
                  fontWeight: "bold",
                  fontSize: "35px",
                }}
              >
                {IsSignInform ? "Sign In" : "Sign Up"}
              </Typography>
              {!IsSignInform && (
                <TextField
                  inputRef={name}
                  type="text"
                  placeholder="Full Name"
                  variant="outlined"
                  fullWidth
                  sx={{
                    // sx={{
                      display: {
                        xs: 'inline-flex',
                        sm: 'inline-flex',
                      },
                      flexDirection: {
                        xs: 'column',
                        sm: 'column',
                      },
                      position: {
                        xs: 'relative',
                        sm: 'relative',
                      },
                      minWidth: {
                        xs: 0,
                        sm: 0,
                      },
                      padding: {
                        xs: 0,
                        sm: 0,
                      },
                      margin: {
                        xs: 0,
                        sm: 0,
                      },
                      border: {
                        xs: 0,
                        sm: 0,
                      },
                      verticalAlign: {
                        xs: 'top',
                        sm: 'top',
                      },
                      width: {
                        xs: '259px',
                        sm: '259px',
                        md:'340px',
                      },
                      backgroundColor: {
                        xs: 'rgba(0, 0, 0, 0.4)',
                        sm: 'rgba(0, 0, 0, 0.4)',
                      },
                      color: {
                        xs: 'white',
                        sm: 'white',
                      },
                      marginTop: {
                        xs: '25px',
                        sm: '25px',
                      },
                      marginBottom: {
                        xs: '25px',
                        sm: '25px',
                      },
                      borderRadius: {
                        xs: '10px',
                        sm: '10px',
                      },
                    // }},
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  InputProps={{
                    style: { color: "white" },
                  }}
                />
              )}

              <TextField
                inputRef={email}
                type="text"
                placeholder="Email or Mobile number"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  color: "white",
                  // width: "340px",
                  marginY: "25px",
                  borderRadius: "10px",
                  // sx={{
                    
                    width: {
                      xs: '259px',
                      sm: '259px',
                      md:'340px',
                    },
                   
                   
                  // }}
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white" },
                }}
              />
              <TextField
                inputRef={password}
                type="password"
                placeholder="Password"
                variant="outlined"
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  color: "white",
                  // width: "340px",
                  marginY: "25px",
                  borderRadius: "10px",
                  width: {
                    xs: '259px',
                    sm: '259px',
                    md:'340px',
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white" },
                }}
              />
              <Typography sx={{ color: "red" }}> {errorMessage}</Typography>
              {resetEmailSent && (<Typography sx={{ color: "red" }}> {errorMessage}</Typography>)}
              <Button
                onClick={handleBtn}
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  height: "60px",
                  fontSize: "25px",
                  marginY: "20px",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
              >
                {IsSignInform ? "Sign In" : "Sign Up"}
              </Button>
              <Typography
                onClick={toggleSignupform}
                sx={{ color: "white", marginTop: "1px", cursor: "pointer", marginLeft:"1rem"}}
              >
                {IsSignInform
                  ? "New to Netflix? Sign up now"
                  : "Already registered? Sign In"}
              </Typography>

              <Typography onClick={handleReset} sx={{ color: "white", cursor: "pointer",marginLeft:"4rem",marginTop:'2rem'}}>Forget password?</Typography>
            </FormGroup>
          </form>
        </FormControl>
      </StyledBox>
    </Box>
  );
};

export default Login;
