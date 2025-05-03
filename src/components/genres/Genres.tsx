import {FC} from "react";
import {Genre} from "../genre/Genre.tsx";

type GenresProps = {
    genres: number[];
}

export const Genres: FC<GenresProps> = ({genres}) => {

    return (
        <div className='flex flex-wrap gap-2'>
            {genres?.map((genre, index) => <Genre key={index} genreId={genre}/>)}
        </div>
    );
};