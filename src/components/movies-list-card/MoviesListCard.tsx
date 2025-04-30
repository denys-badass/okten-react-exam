import {FC, useState} from "react";
import {IMovie} from "../../models/IMovie.ts";
import {PosterPreview} from "../poster-preview/PosterPreview.tsx";

type MovieCardProp = {
    movie: IMovie;
}

export const MoviesListCard: FC<MovieCardProp> = ({movie}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const {original_title, title, overview, release_date, vote_average, vote_count, backdrop_path, poster_path, genre_ids} = movie;

    return (
        <div className='border-emerald-700 border relative'>
            <img
                className='cursor-pointer'
                src={import.meta.env.VITE_IMAGE_BASE_URL + backdrop_path}
                alt={title}
                loading='lazy'
                onClick={() => setIsHovered(!isHovered)}
            />
            <h3 className='text-2xl'>{title}</h3>
            <h4 className='text-xl italic'>{original_title}</h4>
            <p>{overview}</p>
            <p>{release_date}</p>
            <p>Rating {vote_average}({vote_count})</p>
            <ul>
                <li>{backdrop_path}</li>
                <li>{poster_path}</li>
            </ul>
            {isHovered && <PosterPreview movie={movie} handlerClick={() => setIsHovered(!isHovered)}/>}
        </div>
    );
};