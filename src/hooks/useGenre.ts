import {IGenre} from "../models/IGenre.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {genreActions} from "../redux/slices/genre-slice/genreSlice.ts";

export const useGenre = (genreId: number): IGenre => {
    const name = useAppSelector(state => state.genreStore.genresMap[genreId]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!name) dispatch(genreActions.loadGenres())
    }, [dispatch, genreId, name]);

    return {id: genreId, name: name} as IGenre;
}