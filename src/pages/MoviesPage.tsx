import {MoviesList} from "../components/movies-list/MoviesList.tsx";
import {Preloader} from "../components/preloader/Preloader.tsx";
import {movieActions} from "../redux/slices/movie-slice/movieSlice.ts";
import {useLoadingClearParams} from "../hooks/useLoadingClearParams.ts";
export const MoviesPage = () => {
    const {isLoading, params} = useLoadingClearParams({clearParams: ['query']})

    return (
        <>
            {isLoading ? <Preloader/> :
                <MoviesList params={params} action={movieActions.loadMovies} title={'Movies'}/>}
        </>
    );
};