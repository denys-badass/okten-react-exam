import {useSearchParams} from "react-router-dom";

export const usePagination = (page: number, totalPages: number) => {
    const [, setQuery] = useSearchParams();

    const handlePrevious = () => {
        if (page - 1 > 0) {
            setQuery(prev => {
                const params = new URLSearchParams(prev);
                params.set('page', (page - 1).toString());
                return params;
            });
        }
    }

    const handleNext = () => {
        if (page + 1 <= totalPages) {
            setQuery(prev => {
                const params = new URLSearchParams(prev);
                params.set('page', (page + 1).toString());
                return params;
            });
        }
    }

    return {
        handlePrevious,
        handleNext,
    };
};