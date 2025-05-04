import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {genreActions} from "../../redux/slices/genre-slice/genreSlice.ts";
import {GenreLink} from "../genre-link/GenreLink.tsx";

export const GenresListItems = () => {
    const {genres} = useAppSelector(state => state.genreStore);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!genres) dispatch(genreActions.loadGenres());
    }, [genres, dispatch]);

    return (
        <>
            {Object.entries(genres).map(([id, genre]) => <li key={id} className='hover:text-slate-50'><GenreLink
                genreId={+id} genreName={genre}/></li>)}
        </>
    );
};