import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useMovieParams} from "../hooks/useMovieParams.tsx";
import {Preloader} from "../components/preloader/Preloader.tsx";
import {MoviesList} from "../components/movies-list/MoviesList.tsx";
import {movieActions} from "../redux/slices/movie-slice/movieSlice.ts";


export const SearchPage = () => {
    const {isLoading} = useAppSelector(state => state.movieStore);
    const params = useMovieParams();

    return (
        <>
            {isLoading ? <Preloader/> : <MoviesList params={params} action={movieActions.loadSearchMovies} title={'Movies'}/>}
        </>
    );
};