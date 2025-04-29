import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movie-slice/movieSlice.ts";

export const Pagination = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const {totalPages} = useAppSelector(state => state.movieStore);
    const dispatch = useAppDispatch();

    const page = Number(query.get('page'));

    useEffect(() => {
        if (totalPages === 0) dispatch(movieActions.loadTotalPageNum());
    }, [totalPages, dispatch]);

    const handlePrevious = () => {
        if (page - 1 > 0) {
            setQuery({page: (page - 1).toString()});
        }
    }

    const handleNext = () => {
        if (page + 1 <= totalPages) {
            setQuery({page: (page + 1).toString()});
        }
    }

    return (
        <div className='flex w-full justify-center gap-10 mb-5'>
            <button onClick={handlePrevious} className='py-2 bg-emerald-700/80 w-1/9 rounded-2xl hover:text-slate-50 cursor-pointer'>Prev</button>
            <button onClick={handleNext} className='py-2 bg-emerald-700/80 w-1/9 rounded-2xl hover:text-slate-50 cursor-pointer'>Next</button>
        </div>
    );
};