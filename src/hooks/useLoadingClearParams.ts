import {useEffect} from 'react';
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useSearchParams} from "react-router-dom";
import {useMovieParams} from "./useMovieParams.ts";

export const useLoadingClearParams = (
    config: {
        clearParams?: string[],
        extraParams?: Record<string, string>,
        defaultParams?: Record<string, string>,
    }
) => {
    const { isLoading } = useAppSelector((state) => state.movieStore);
    const [, setSearchParams] = useSearchParams();
    const params = useMovieParams(config);

    useEffect(() => {
        const current = new URLSearchParams(window.location.search); // <--- додали це
        const newParams = new URLSearchParams();

        Object.entries(params).forEach(([key, value]) => {
            newParams.set(key, value);
        });

        if (current.toString() !== newParams.toString()) {
            setSearchParams(newParams);
        }
    }, [params, setSearchParams]);

    return { isLoading, params };
};