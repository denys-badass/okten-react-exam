import {IMovieParams} from "../models/IMovieParams.ts";
import {movieActions} from "../redux/slices/movie-slice/movieSlice.ts";
import {useAppStateKey} from "./useAppStateKey.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";

export const useLoadMovies = (params: IMovieParams, action: typeof movieActions.loadMovies | typeof movieActions.loadSearchMovies) => {
    const key = useAppStateKey(params);
    const moviesData = useAppSelector(state => state.movieStore.moviesData[key]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!moviesData) {
            dispatch(action(params));
        }
    }, [dispatch, key, moviesData, action, params]);

    return moviesData;
};