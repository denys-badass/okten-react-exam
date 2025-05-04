import {MoviesList} from "../components/movies-list/MoviesList.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {Preloader} from "../components/preloader/Preloader.tsx";
import {useMovieParams} from "../hooks/useMovieParams.tsx";

export const MoviesPage = () => {
    const {isLoading} = useAppSelector(state => state.movieStore);
    const params = useMovieParams();
    return (
        <>
            {isLoading ? <Preloader/> : <MoviesList params={params}/>}
        </>
    );
};