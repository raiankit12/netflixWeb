import { Box } from "@mui/material";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Box>
      <Provider store={appStore}>
      <Body/>
      </Provider>
    
    </Box>
  );
}

export default App;
