import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {FC, useEffect, useState} from "react";
import {movieActions} from "../../redux/slices/movie-slice/movieSlice.ts";
import {MoviesListCard} from "../movies-list-card/MoviesListCard.tsx";
import Masonry from "react-layout-masonry";
import {IMovie} from "../../models/IMovie.ts";
import {MovieInfo} from "../movie-info/MovieInfo.tsx";
import {Pagination} from "../pagination/Pagination.tsx";
import {useAppStateKey} from "../../hooks/useAppStateKey.tsx";
import {IMovieParams} from "../../models/IMovieParams.ts";
import {SortBar} from "../sort-bar/SortBar.tsx";
import {PageIndicator} from "../page-indicator/PageIndicator.tsx";

type MoviesListProps = {
    params: IMovieParams;
    action: typeof movieActions
}

export const MoviesList: FC<MoviesListProps> = ({params}) => {
    const key = useAppStateKey(params);
    const [movieSelected, setMovieSelected] = useState<IMovie | null>(null);
    const moviesData = useAppSelector(state => state.movieStore.moviesData[key]);
    const dispatch = useAppDispatch();
    const {page} = params

    useEffect(() => {
        if (!moviesData) {
            dispatch(movieActions.loadMovies(params));
        }
        setMovieSelected(null);
        const top = window.innerHeight * 0.2;
        window.scrollTo({top: -top, behavior: "smooth"});
    }, [dispatch, key, moviesData]);

    const movies = moviesData?.results || [];
    const totalPages = moviesData?.total_pages || 1;

    return (
        <div>
            {movieSelected && <MovieInfo movie={movieSelected} />}
            <div className='w-3/4 mx-auto py-8 flex flex-col'>
                <h2 className='w-full flex justify-center text-3xl'>Movies</h2>
                <SortBar />
                {totalPages > 1 && <PageIndicator page={+page}/>}
                <Masonry columns={{768: 2, 1024: 3, 1280: 4}} gap={24}>
                    {movies.map(movie => <MoviesListCard key={movie.id} movie={movie} onSelect={() => {
                        setMovieSelected(movie);
                        const top = window.innerHeight * 0.2;
                        window.scrollTo({top: -top, behavior: "smooth"});
                    }} />)}
                </Masonry>
            </div>
            <Pagination page={+page} totalPages={totalPages}/>
        </div>
    );
};