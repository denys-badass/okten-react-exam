import {Preloader} from "../components/preloader/Preloader.tsx";
import {MoviesList} from "../components/movies-list/MoviesList.tsx";
import {movieActions} from "../redux/slices/movie-slice/movieSlice.ts";
import {useLoadingClearParams} from "../hooks/useLoadingClearParams.ts";


export const SearchPage = () => {
    const {isLoading, params} = useLoadingClearParams({clearParams: ['sort_by', 'with_genres']})

    return (
        <>
            {isLoading ? <Preloader/> : <MoviesList params={params} action={movieActions.loadSearchMovies} title={'Movies'}/>}
        </>
    );
};