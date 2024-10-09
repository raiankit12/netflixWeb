import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger"; // Import the logger
import userReducer from "../utils/userSlice";
import moviesReducer from "../utils/movieSlice";
import gptReducer from "../utils/gptSlice";
import configReducer from "../utils/configSlice";

// Create the logger middleware
const logger = createLogger();

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(logger), // Use the middleware option to add logger
});

export default appStore;
