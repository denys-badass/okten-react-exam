import {FC} from "react";
import {GenreLink} from "../genre-link/GenreLink.tsx";
import {useGenre} from "../../hooks/useGenre.ts";

type GenreProps = {
    genreId: number;
}

export const Genre: FC<GenreProps> = ({genreId}) => {
    const genre = useGenre(genreId)

    return (
        <div className='p-1 bg-emerald-600/80 text-slate-50 rounded-lg text-[0.7rem] hover:bg-emerald-700'>
            <GenreLink genre={genre}/>
        </div>
    );
};