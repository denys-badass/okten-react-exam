import {FC} from "react";
import {IMovie} from "../../models/IMovie.ts";

type PosterProp = {
    movie: IMovie;
    handlerClick: () => void;
}

export const PosterPreview: FC<PosterProp> = ({movie, handlerClick}) => {
    const {poster_path, title} = movie

    return (
        <div
            className='fixed top-[10vh] left-0 z-10 w-full h-[90dvh] flex justify-center items-center'
            onClick={handlerClick}>
            <img
                className='z-20'
                src={import.meta.env.VITE_IMAGE_BASE_URL + poster_path}
                alt={title}
            />
        </div>
    );
};