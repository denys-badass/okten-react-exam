import {FC, useState} from "react";
import {IMovie} from "../../models/IMovie.ts";
import {StarsRating} from "../stars-rating/StarsRating.tsx";
import {FaDisplay} from "react-icons/fa6";
import {GenreBadges} from "../genre-badges/GenreBadges.tsx";
import {PosterPreview} from "../poster-preview/PosterPreview.tsx";


type MovieInfoProps = {
    movie: IMovie;
};

export const MovieInfo: FC<MovieInfoProps> = ({ movie }) => {
    const [isPosterOpen, setIsPosterOpen] = useState(false);
    const {
        backdrop_path,
        title,
        original_title,
        vote_average,
        vote_count,
        release_date,
        overview,
        genre_ids,
    } = movie;

    const backdropUrl = backdrop_path
        ? import.meta.env.VITE_IMAGE_BASE_URL + '/original' + backdrop_path
        : '/movie_placeholder_lg.jpg';

    const handleClickPoster = () => {
        setIsPosterOpen(!isPosterOpen);
    };

    return (
        <div
            className={`w-full min-h-[60dvh] bg-cover bg-center relative flex items-end`}
            style={{ backgroundImage: `url(${backdropUrl})` }}
        >
            <div className='absolute inset-0 bg-gradient-to-t from-slate-50 via-white/40 to-transparent' />

            <div className='relative z-10 px-4 sm:px-6 md:px-10 py-6 w-full max-w-6xl mx-auto flex flex-col gap-4'>
                <div>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>{title}</h2>
                    <p className='italic text-sm sm:text-base'>Original title: {original_title}</p>
                    <GenreBadges genres={genre_ids} />
                </div>

                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm sm:text-base'>
                    <p>Released: {release_date || 'Unknown'}</p>
                    <div className='flex gap-3 text-lg items-center'>
                        <StarsRating rating={vote_average} />
                        <p>{(vote_average / 2).toFixed(1)}</p>
                        <p className='text-slate-500'>({vote_count})</p>
                    </div>
                    <button
                        onClick={handleClickPoster}
                        className='flex gap-2 items-center text-emerald-700 hover:text-emerald-900 transition-colors'
                    >
                        <FaDisplay className='text-xl' />
                        <span className='font-medium cursor-pointer'>Show poster</span>
                    </button>
                </div>

                <p className='text-slate-700 text-sm sm:text-base'>{overview}</p>
            </div>

            {isPosterOpen && <PosterPreview movie={movie} handlerClick={handleClickPoster} />}
        </div>
    );
};