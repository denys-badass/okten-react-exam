import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useMovieParams} from "../hooks/useMovieParams.tsx";
import {Preloader} from "../components/preloader/Preloader.tsx";
import {MoviesSearchList} from "../components/movies-search-list/MoviesSearchList.tsx";

export const SearchPage = () => {
    const {isLoading} = useAppSelector(state => state.movieStore);
    const params = useMovieParams();

    return (
        <>
            {isLoading ? <Preloader/> : <MoviesSearchList params={params}/>}
        </>
    );
};