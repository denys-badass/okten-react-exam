import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useSearchParams} from "react-router-dom";
import {useMovieParams} from "./useMovieParams.ts";
import {useEffect} from "react";

export const useLoadingClearParams = (
    pageConfig: {
        clearParams?: string[],
        extraParams?: Record<string, string>
    }
) => {
    const { isLoading } = useAppSelector((state) => state.movieStore);
    const [query, setQuery] = useSearchParams();
    const params = useMovieParams();

    useEffect(() => {
        const newQuery = new URLSearchParams(query);
        pageConfig.clearParams?.forEach((key) => newQuery.delete(key));
        if (pageConfig.extraParams) {
            Object.entries(pageConfig.extraParams).forEach(([key, value]) => {
                newQuery.set(key, value);
            });
        }
        setQuery(newQuery);
    }, [JSON.stringify(pageConfig.extraParams)]);

    return {isLoading, params};
};