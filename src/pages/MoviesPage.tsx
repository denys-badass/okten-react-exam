import {MoviesList} from "../components/movies-list/MoviesList.tsx";
import {Outlet} from "react-router-dom";
import {Pagination} from "../components/pagination/Pagination.tsx";

export const MoviesPage = () => {
    return (
        <>
            <Outlet/>
            <MoviesList/>
            <Pagination/>
        </>
    );
};