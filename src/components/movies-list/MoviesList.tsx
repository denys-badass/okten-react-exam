import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect, useState} from "react";
import {movieActions} from "../../redux/slices/movie-slice/movieSlice.ts";
import {MoviesListCard} from "../movies-list-card/MoviesListCard.tsx";
import {useSearchParams} from "react-router-dom";
import Masonry from "react-layout-masonry";
import {IMovie} from "../../models/IMovie.ts";
import {MovieInfo} from "../movie-info/MovieInfo.tsx";

export const MoviesList = () => {
    const [movieSelected, setMovieSelected] = useState<IMovie | null>(null);
    const {movies} = useAppSelector(state => state.movieStore)
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1', sort_by: 'popularity.desc'});
    const page = query.get("page") || '1';
    const sortBy = query.get("sort_by") || 'popularity.desc';
    const key = page+sortBy;

    useEffect(() => {
        if (!movies[key]) {
            dispatch(movieActions.loadMovies({page, sortBy}));
        }
        setMovieSelected(null);
        const top = window.innerHeight * 0.2;
        window.scrollTo({top: -top, behavior: "smooth"});
    }, [dispatch, page, movies, sortBy, key]);

    return (
        <div>
            {movieSelected && <MovieInfo movie={movieSelected} />}
            <div className='w-3/4 mx-auto py-8 flex flex-col'>
                <h2 className='w-full flex justify-center text-3xl'>Movies</h2>
                <div className='flex items-center w-1/3 gap-4 self-end'>
                    <label htmlFor="sort">Sort by:</label>
                    <select
                        name="sort"
                        id="sort"
                        value={sortBy}
                        className='p-2'
                        onChange={(e) => setQuery({page, sort_by: e.target.value})}
                    >
                        <option value="popularity.desc">Popularity</option>
                        <option value="vote_average.desc">Rating</option>
                        <option value="vote_count.desc">Reviews</option>
                        <option value="primary_release_date.desc">Release year</option>
                        <option value="title.desc">Title</option>
                    </select>
                </div>
                <div className='flex justify-center items-center gap-4 mb-6'>
                    <div className='w-1/3 h-[2px] bg-gradient-to-r from-orange-500 to-slate-50'></div>
                    <p>Page {page}</p>
                    <div className='w-1/3 h-[2px] bg-gradient-to-l from-orange-500 to-slate-50'></div>
                </div>
                <Masonry columns={{768: 2, 1024: 3, 1280: 4}} gap={24}>
                    {movies[key]?.map(movie => <MoviesListCard key={movie.id} movie={movie} onSelect={() => {
                        setMovieSelected(movie);
                        const top = window.innerHeight * 0.2;
                        window.scrollTo({top: -top, behavior: "smooth"});
                    }} />)}
                </Masonry>
            </div>
        </div>
    );
};