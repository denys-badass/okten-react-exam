import {useSearchParams} from "react-router-dom";
import {IMovieParams} from "../models/IMovieParams.ts";

export const useMovieParams = (): IMovieParams => {
    const [query] = useSearchParams({ page: '1' });
    const params = {
        page: query.get('page') || '1',
        sort_by: query.get('sort_by') || '',
        query: query.get('query') || '',
        genre: query.get('genre') || '',
    };
    const filteredParams: IMovieParams = {page: params.page};

    for (const [key, value] of Object.entries(params)) {
        if (value) {
            filteredParams[key as keyof IMovieParams] = value;
        }
    }

    return filteredParams;
};