import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGenre} from "../../../models/IGenre.ts";

import {loadGenres} from "./thunks/loadGenres.ts";

type InitialGenreType = {
    genres: Record<number, string>;
    genreNames: string[];
}

const initialGenreState: InitialGenreType = {genres: {}, genreNames: []};

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