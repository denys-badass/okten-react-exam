import {useSearchParams} from "react-router-dom";
import {IMovieParams} from "../models/IMovieParams.ts";
import {useMemo} from "react";

type MovieParamsConfig = {
    defaultParams?: Record<string, string>;
    extraParams?: Record<string, string>;
    clearParams?: string[];
};

export const useMovieParams = (config: MovieParamsConfig = {}): IMovieParams => {
    const [searchParams] = useSearchParams(config.defaultParams || { page: '1' });

    const { extraParams = {}, clearParams = [] } = config;

    return useMemo(() => {
        const mergedParams = new URLSearchParams(searchParams);

        clearParams.forEach(key => mergedParams.delete(key));
        Object.entries(extraParams).forEach(([key, value]) => {
            mergedParams.set(key, value);
        });

        const rawParams = {
            page: mergedParams.get('page') || '1',
            sort_by: mergedParams.get('sort_by') || '',
            query: mergedParams.get('query') || '',
            with_genres: mergedParams.get('with_genres') || '',
        };

        const filteredParams: IMovieParams = { page: rawParams.page };

        for (const [key, value] of Object.entries(rawParams)) {
            if (value) {
                filteredParams[key as keyof IMovieParams] = value;
            }
        }

        return filteredParams;
    }, [searchParams, extraParams, clearParams]);
};