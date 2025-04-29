import {FC} from "react";
import {IMovie} from "../../models/IMovie.ts";

type MovieCardProp = {
    movie: IMovie;
}

export const MoviesListCard: FC<MovieCardProp> = ({movie}) => {
    const {adult, original_title, title, overview, release_date, vote_average, vote_count, backdrop_path, poster_path} = movie;

    return (
        <div className='border-emerald-700 border-2 rounded-lg'>
            {adult && <p>18+</p>}
            <h3 className='text-2xl'>{title}</h3>
            <h4 className='text-xl italic'>{original_title}</h4>
            <p>{overview}</p>
            <p>{release_date}</p>
            <p>Rating {vote_average}({vote_count})</p>
            <ul>
                <li>{backdrop_path}</li>
                <li>{poster_path}</li>
            </ul>

        </div>
    );
};