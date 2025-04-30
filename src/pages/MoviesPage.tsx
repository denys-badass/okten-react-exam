import {MoviesList} from "../components/movies-list/MoviesList.tsx";
import {Outlet} from "react-router-dom";
import {Pagination} from "../components/pagination/Pagination.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {Preloader} from "../components/preloader/Preloader.tsx";

export const MoviesPage = () => {
    const {isLoading} = useAppSelector(state => state.movieStore);

    if (isLoading) {
        return <Preloader/>
    } else {
        return (
            <>
                <Outlet/>
                <MoviesList/>
                <Pagination/>
            </>
        );

    }
};