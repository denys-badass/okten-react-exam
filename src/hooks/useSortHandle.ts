import {useSearchParams} from "react-router-dom";
import {ChangeEvent} from "react";

export const useSortHandle = () => {
    const [query, setQuery] = useSearchParams({ page: '1' });
    const sortBy = query.get('sort_by') || 'popularity.desc';

    const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(query);
        params.set('sort_by', e.target.value);
        setQuery(params);
    };

    return {
        sortBy,
        handleSortChange,
    };
};