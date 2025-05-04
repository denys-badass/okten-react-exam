import {FC, useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {genreActions} from "../../redux/slices/genre-slice/genreSlice.ts";
import {GenreLink} from "../genre-link/GenreLink.tsx";

type GenreProps = {
    genreId: number;
}

export const Genre: FC<GenreProps> = ({genreId}) => {
    const name = useAppSelector(state => state.genreStore.genres[genreId]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!name) dispatch(genreActions.loadGenres())
    }, [dispatch, genreId, name]);

    return (
        <div className='p-1 bg-emerald-600/80 text-slate-50 rounded-lg text-[0.7rem] hover:bg-emerald-700'>
            <GenreLink genreId={genreId} genreName={name}/>
        </div>
    );
};