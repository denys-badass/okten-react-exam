import {FC} from "react";
import {IMovie} from "../../models/IMovie.ts";
import {StarsRating} from "../stars-rating/StarsRating.tsx";
import {Genres} from "../genres/Genres.tsx";

type MovieCardProp = {
    movie: IMovie;
    onSelect: () => void;
}

export const MoviesListCard: FC<MovieCardProp> = ({movie, onSelect}) => {
    const {title, release_date, vote_average, backdrop_path, genre_ids} = movie;

    return (
        <div className='border-emerald-700 border rounded-t-md relative bg-slate-200/50 cursor-pointer
    transition-transform duration-300 ease-out
    hover:scale-102 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-600/40 hover:brightness-115
    hover:rotate-[0.3deg] hover:z-10
    will-change-transform'
        >
            <div onClick={onSelect}>
                <img
                className='w-full rounded-t-md'
                src={import.meta.env.VITE_IMAGE_BASE_URL + '/w300' + backdrop_path}
                alt={title}
                loading='lazy'
            />
                <div className='flex flex-col gap-3 p-3'>
                    <h3 className='text-2xl'>{title}</h3>
                    <p>{release_date?.slice(0, 4) || 'Unknown'} year</p>

                    <StarsRating rating={vote_average}/>
                </div>


            </div>
            <Genres genres={genre_ids}/>
        </div>
    );
};