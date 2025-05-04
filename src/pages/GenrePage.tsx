import {useParams, useSearchParams} from "react-router-dom";
import {useMovieParams} from "../hooks/useMovieParams.tsx";
import {Preloader} from "../components/preloader/Preloader.tsx";
import {MoviesList} from "../components/movies-list/MoviesList.tsx";
import {movieActions} from "../redux/slices/movie-slice/movieSlice.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";

export const GenrePage = () => {
    const {genreId = '0'} = useParams();
    const [query, setQuery] = useSearchParams({page: '1'});
    const {isLoading} = useAppSelector(state => state.movieStore);
    const genreName = useAppSelector(state => state.genreStore.genres[+genreId]);

    useEffect(() => {
        const params = new URLSearchParams(query);
        params.delete("query");
        params.set("with_genres", genreId?.toString() || '');
        setQuery(params);
    }, [genreId]);

    const params= useMovieParams();


    return (
        <>
            {isLoading ? <Preloader/> : <MoviesList params={params} action={movieActions.loadMovies} title={genreName}/>}
        </>
    );
};