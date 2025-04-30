import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movie-slice/movieSlice.ts";
import {MoviesListCard} from "../movies-list-card/MoviesListCard.tsx";
import {useSearchParams} from "react-router-dom";

export const MoviesList = () => {
    const {movies} = useAppSelector(state => state.movieStore)
    const dispatch = useAppDispatch();
    const [query] = useSearchParams({page: '1'});
    const currentPage = Number(query.get("page") || '1');


    useEffect(() => {
        if (!movies[currentPage]) {
            dispatch(movieActions.loadMovies(currentPage));
        }
    }, [dispatch, currentPage]);

    return (
        <div className='grid grid-cols-4 gap-4 py-8 w-3/4 mx-auto'>
            {movies[currentPage]?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};