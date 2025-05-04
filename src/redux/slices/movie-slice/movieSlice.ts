import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {movieService} from "../../../services/movie.service.ts";
import {IMovieResponse} from "../../../models/IMovieResponse.ts";
import {IMovieParams} from "../../../models/IMovieParams.ts";
import {createMovieThunk} from "../../thunks/createMovieThunk.ts";

type InitialMovieType = {
    moviesData: Record<string, IMovieResponse>;
    params: IMovieParams;
    isLoading: boolean;
}

const initialMovieState: InitialMovieType = {moviesData: {},params: {page: '1'}, isLoading: false};

const loadMovies = createMovieThunk(
    'movieSlice/loadMovies',
    movieService.getMovies,
)

const loadSearchMovies = createMovieThunk(
    'movieSlice/loadSearchMovies',
    movieService.getSearchResults,
)


export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: initialMovieState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadMovies.fulfilled, (state, action: PayloadAction<{ key: string, data: IMovieResponse }>) => {
                const {key, data} = action.payload;
                state.moviesData[key] = data;
                state.isLoading = false;
            })
            .addCase(loadSearchMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadSearchMovies.fulfilled, (state, action: PayloadAction<{key: string, data: IMovieResponse}>) => {
                const {key, data} = action.payload;
                state.moviesData[key] = data;
                state.isLoading = false;
            })

    }
});

export const movieActions = {
    ...movieSlice.actions,
    loadMovies,
    loadSearchMovies,
}