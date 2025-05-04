import {FC} from "react";
import {PageIndicator} from "../page-indicator/PageIndicator.tsx";
import {SortBar} from "../sort-bar/SortBar.tsx";

type MoviesListHeaderProps = {
    title: string;
    totalPages: number;
    totalResults: number;
    page: number;
    query?: string;
}

export const MoviesListHeader: FC<MoviesListHeaderProps> = ({title, totalPages, totalResults, page, query}) => {
    if (query) {
        return (
            <>
                <h2 className='w-full flex justify-center text-3xl'>Movies</h2>
                <h3>Search results for {query}</h3>
                <p>Found {totalResults}</p>
                {totalPages > 1 && <PageIndicator page={+page}/>}
            </>
        );
    }

    return (
        <>
            <h2 className='w-full flex justify-center text-3xl'>{title}</h2>
            <SortBar/>
            {totalPages > 1 && <PageIndicator page={+page}/>}
        </>
    );
};