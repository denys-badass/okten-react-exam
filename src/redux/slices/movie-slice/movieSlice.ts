import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovie} from "../../../models/IMovie.ts";
import {movieService} from "../../../services/movie.service.ts";

type InitialMovieType = {
    movies: Record<number, IMovie[]>;
    totalPages: number;
}

const initialMovieState: InitialMovieType = {movies: {}, totalPages: 0};

const loadMovies = createAsyncThunk(
    'movieSlice/loadMovies',
    async (page: number, thunkAPI) => {
        const movies = await movieService.getMovies(page);
        return thunkAPI.fulfillWithValue({page: page, movies: movies});
    }
);

const loadTotalPageNum = createAsyncThunk(
    'movieSlice/loadTotalPageNum',
    async (_, thunkAPI) => {
        const pages = await movieService.getTotalPages();
        return thunkAPI.fulfillWithValue(pages)
    }
)

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: initialMovieState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadMovies.fulfilled, (state, action: PayloadAction<{ page: number, movies: IMovie[] }>) => {
                const {page, movies} = action.payload;
                state.movies[page] = movies;
            })
            .addCase(loadTotalPageNum.fulfilled, (state, action: PayloadAction<number>) => {
                state.totalPages = action.payload;
            })
    }
});

export const movieActions = {
    ...movieSlice.actions,
    loadMovies,
    loadTotalPageNum
}