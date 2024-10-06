import { Box, Button,} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from '@mui/material/FormControl';
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
// import styled from "@emotion/styled";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect} from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { logo, Suported_language } from "../utils/constants";
import styled from "@emotion/styled";
import { showGptSearch } from "../utils/gptSlice";
import { toggleLang } from "../utils/configSlice";
// const GptComp=styled(Box)

export const CustomButton = styled(Button)(({ theme, bgColor }) => ({
  backgroundColor: bgColor || "red",
  variant: "contained",
  minWidth: {md:"100px",sm:"150px"},
padding:{
  xs:"0px"
},
marginLeft:{
  xs:"-12px"
},

borderRadius:{
  xs:"10px"
},
color: "white",
  "&:hover": {
    backgroundColor: bgColor || "red",
  },
  lineHeight:{
xs:"2.0px"
  } 
}));

const Header = () => {
  // const [age, setAge] = useState("English");
  // const [search, setSearch] = useState("Home");

  const user = useSelector((store) => store.user);
  console.log(user);
  const langKey = useSelector((store) => store.config);
  console.log(langKey);

  const { GptSearch } = useSelector((store) => store.gpt);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/errorPage");
      });
  };

  const handleGptToggele = () => {
    dispatch(showGptSearch());
    // setSearch(search==="Home"?"Search":"Home")
    //  console.log()
  };

  const handleDropDownCahnge = (event) => {
    dispatch(toggleLang(event.target.value));
    console.log(event.target.value);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log(user);
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when the component will not be render
    return () => unsubscribe();
  }, []);

  return (
    <Box
      sx={{
        position: "absolute",
        top: {
          md: "0px",
          xs: "-17px",
        },
        left: {
          md: "0px",
          xs: "-59px",
        },
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: {
          md: "10px 20px",
          xs: "11px 37px",
        },
        zIndex: 1000,
      }}
    >
      <main>
        <img
          src={logo}
          alt="logo"
          style={{ width: {md:"200px",sm:"178px"}, height: "75px", paddingLeft: "10px" }}
        />
      </main>

      {user && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {GptSearch && (
            <FormControl fullWidth sx={{ marginRight: "50px" }}>
              <InputLabel id="language-select-label"></InputLabel>
              <Select
                labelId="language-select-label"
                defaultValue={Suported_language?.[0]?.identifier}
                onChange={handleDropDownCahnge}
                sx={{
                  color: "red",
                  backgroundColor: "white",
                  height: "40px",
                  width: "135px",
                  padding: "7.5px 14px",
                }}
              >
                {Suported_language?.map((lang) => (
                  <MenuItem key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          <CustomButton
            onClick={handleGptToggele}
            bgColor="blue"
            sx={{ marginRight: {md:"25px",xs:"4px"} }}
          >
            {GptSearch ? "Home" : "Search"}
          </CustomButton>
          <img
            src={user?.photoURL}
            alt="photo-icon"
            style={{
              width:{md:"40px",xs:"38px"},
              height: {md:"25px",xs:"38px"},
              borderRadius: "50%",
              marginRight:"7px",
              padding: {md:"10px",xs:"0px"},
            }}
          />

          <CustomButton
            onClick={handleSignOut}
            bgColor="red"
            sx={{ marginRight: "5px" ,minWidth:{xs:"88px"}}}
          >
            Sign out
          </CustomButton>
        </Box>
      )}
    </Box>
  );
};

export default Header;
