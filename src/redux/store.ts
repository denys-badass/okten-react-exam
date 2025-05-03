import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./slices/movie-slice/movieSlice.ts";
import {genreSlice} from "./slices/genre-slice/genreSlice.ts";

export const store = configureStore({
    reducer: {
        movieStore: movieSlice.reducer,
        genreStore: genreSlice.reducer,
    }
})