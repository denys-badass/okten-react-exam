import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./slices/movie-slice/movieSlice.ts";

export const store = configureStore({
    reducer: {
        movieStore: movieSlice.reducer,
    }
})