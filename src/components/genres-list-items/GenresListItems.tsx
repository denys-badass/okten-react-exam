import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {genreActions} from "../../redux/slices/genre-slice/genreSlice.ts";
import {GenreLink} from "../genre-link/GenreLink.tsx";

export const GenresListItems = () => {
    const {genresList} = useAppSelector(state => state.genreStore);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (genresList.length === 0) dispatch(genreActions.loadGenres());
    }, [genresList.length, dispatch]);

    return (
        <>
            {genresList?.map((genre) => <li key={genre.id} className='rounded-2xl hover:text-emerald-600 hover:bg-slate-50 py-1'><GenreLink
                genre={genre}/></li>)}
        </>
    );
};