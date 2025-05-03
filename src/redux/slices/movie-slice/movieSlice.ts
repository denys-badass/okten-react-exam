import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovie} from "../../../models/IMovie.ts";
import {movieService} from "../../../services/movie.service.ts";
import {IMovieResponse} from "../../../models/IMovieResponse.ts";

type InitialMovieType = {
    moviesData: Record<string, IMovieResponse>;
    isLoading: boolean;
}

type ParamsType = {
    page: string;
    sortBy?: string;
    search?: string;
}

const initialMovieState: InitialMovieType = {moviesData: {}, isLoading: false};

const loadMovies = createAsyncThunk(
    'movieSlice/loadMovies',
    async ({page, sortBy}: ParamsType , thunkAPI) => {
        const movies = await movieService.getMovies(page, sortBy);
        return thunkAPI.fulfillWithValue({key: page+sortBy, movies: movies});
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
            .addCase(loadMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadMovies.fulfilled, (state, action: PayloadAction<{ key: string, movies: IMovie[] }>) => {
                const {key, movies} = action.payload;
                state.movies[key] = movies;
                state.isLoading = false;
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