import {useEffect, useMemo, useRef} from 'react';
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useSearchParams} from "react-router-dom";
import {useMovieParams} from "./useMovieParams.ts";

export const useLoadingClearParams = (
    pageConfig: {
        clearParams?: string[],
        extraParams?: Record<string, string>
    }
) => {
    const { isLoading } = useAppSelector((state) => state.movieStore);
    const [query, setQuery] = useSearchParams();
    const params = useMovieParams();
    const stableExtraParams = useMemo(() => pageConfig.extraParams, [pageConfig.extraParams]);
    const stableClearParams = useMemo(() => pageConfig.clearParams, [pageConfig.clearParams]);

    const prevQueryRef = useRef(query);

    useEffect(() => {
        if (prevQueryRef.current !== query) {
            const newQuery = new URLSearchParams(query);
            stableClearParams?.forEach((key) => newQuery.delete(key));
            if (stableExtraParams) {
                Object.entries(stableExtraParams).forEach(([key, value]) => {
                    newQuery.set(key, value);
                });
            }
            setQuery(newQuery);
            prevQueryRef.current = query;
        }
    }, [query, setQuery, stableExtraParams, stableClearParams]);

    return { isLoading, params };
};