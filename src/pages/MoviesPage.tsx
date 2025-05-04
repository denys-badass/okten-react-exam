import {MoviesList} from "../components/movies-list/MoviesList.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {Preloader} from "../components/preloader/Preloader.tsx";
import {useMovieParams} from "../hooks/useMovieParams.tsx";
import {movieActions} from "../redux/slices/movie-slice/movieSlice.ts";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

export const MoviesPage = () => {
    const {isLoading} = useAppSelector(state => state.movieStore);
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        const params = new URLSearchParams(query);
        params.delete('query');
        setQuery(params);
    }, []);

    const params = useMovieParams();


    return (
        <>
            {isLoading ? <Preloader/> :
                <MoviesList params={params} action={movieActions.loadMovies} title={'Movies'}/>}
        </>
    );
};