import {PayloadAction} from "@reduxjs/toolkit";
import {IMovieResponse} from "../../../../models/IMovieResponse.ts";
import {lruCache} from "../../../../utils/lruCache.ts";
import {InitialMovieType} from "../movieSlice.ts";

export const handleFulfilledMovies = (
    state: InitialMovieType,
    action: PayloadAction<{key: string, data: IMovieResponse}>
) => {
    const {key, data} = action.payload;
    const {updatedCache, updatedHistory} = lruCache(
        state.moviesData,
        state.keyHistory,
        key,
        data,
        20
    );
    state.moviesData = updatedCache;
    state.keyHistory = updatedHistory;
    state.isLoading = false;
}

export const setPending = (state: InitialMovieType) => {
    state.isLoading = true;
}