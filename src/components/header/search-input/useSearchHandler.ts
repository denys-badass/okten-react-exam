import {useEffect, useRef} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import * as React from "react";

export const useSearchHandler = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [query] = useSearchParams({query: ''})

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = query.get('query') || '';
        }
    }, [query]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputRef.current) {
            const query = inputRef.current.value.trim();
            if (query.length > 0) {
                navigate(`search?query=${encodeURIComponent(query)}`);
            } else {
                navigate('/');
            }
        }
    }

    return {
        inputRef,
        handleKeyDown,
    };
};