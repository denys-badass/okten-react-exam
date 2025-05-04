import {FC} from "react";
import {IMovie} from "../../models/IMovie.ts";
import {FaRegWindowClose} from "react-icons/fa";

type PosterProp = {
    movie: IMovie;
    handlerClick: () => void;
}

export const PosterPreview: FC<PosterProp> = ({movie, handlerClick}) => {
    const {poster_path, title} = movie
    const posterPath = poster_path ? import.meta.env.VITE_IMAGE_BASE_URL + '/w780' + poster_path : '../../../public/movie_placeholder_sm.jpg';
    return (
        <div
            className='fixed pt-[10dvh] top-0 left-0 z-50 w-full h-full mx-auto flex justify-center items-center bg-slate-900/80'>
            <img
                className='z-20 h-[80dvh] max-w-[80dvw]'
                src={posterPath}
                alt={title}
            />
            <div className='fixed top-0 right-[10%] w-[100px] h-[100px] rounded-[50px] font-bold text-5xl text-slate-300 pt-[5dvh] cursor-pointer' onClick={handlerClick}><FaRegWindowClose /></div>
        </div>
    );
};