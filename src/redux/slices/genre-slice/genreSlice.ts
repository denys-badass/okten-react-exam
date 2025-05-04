import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGenre} from "../../../models/IGenre.ts";
import {genreService} from "../../../services/genre.service.ts";

type InitialGenreType = {
    genres: Record<number, string>;
    genreNames: string[];
}

const initialGenreState: InitialGenreType = {genres: {}, genreNames: []};

const loadGenres = createAsyncThunk(
    'genreSlice/loadGenres',
    async (_,thunkAPI ) => {
        const response = await genreService.getGenres();
        return thunkAPI.fulfillWithValue(response);
    }
);

export const genreSlice= createSlice({
    name: 'genreSlice',
    initialState: initialGenreState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadGenres.fulfilled, (state, action: PayloadAction<IGenre[]>) => {
                state.genres = action.payload.reduce((acc, genre) => {
                    acc[genre.id] = genre.name;
                    return acc;
                }, {} as Record<number, string>);
            })
    }
})

export const genreActions = {
    ...genreSlice.actions,
    loadGenres,
}