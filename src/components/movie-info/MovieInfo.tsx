import {FC} from "react";
import {IMovie} from "../../models/IMovie.ts";
import {StarsRating} from "../stars-rating/StarsRating.tsx";
import {FaDisplay} from "react-icons/fa6";
import {Genres} from "../genres/Genres.tsx";

type MovieInfoProps = {
    movie: IMovie;
}

export const MovieInfo:FC<MovieInfoProps> = ({movie}) => {
    const {backdrop_path,title, original_title, vote_average, vote_count, release_date, overview, genre_ids, poster_path} = movie
    const backdropUrl = import.meta.env.VITE_IMAGE_BASE_URL + '/original' + backdrop_path;
    return (
        <div
            className={`w-full h-[60dvh] bg-cover bg-top relative flex items-end`}
            style={{backgroundImage: `url(${backdropUrl})`}}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent" />
            <div className='z-10 px-8 w-7/8 mx-auto flex flex-col gap-4'>
                <div>
                    <h2 className='text-5xl font-medium'>{title}</h2>
                    <p className='italic'>Original title: {original_title}</p>
                    <Genres genres={genre_ids}/>
                </div>
                <div className='flex items-center w-full justify-between'>
                    <p>Released: {release_date || 'Unknown'}</p>
                    <div className='flex gap-4 text-xl items-center'>
                        <StarsRating rating={vote_average}/>
                        <p>{(vote_average / 2).toFixed(1)}</p>
                        <p>({vote_count})</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p>Show poster</p>
                        <FaDisplay />
                    </div>
                </div>
                <p>{overview}</p>
            </div>

        </div>
    );
};