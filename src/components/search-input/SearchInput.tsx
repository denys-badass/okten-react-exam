import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import * as React from "react";
import {IoSearch} from "react-icons/io5";

export const SearchInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

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

    return (
        <div className='relative'>
            <input
                ref={inputRef}
                type='text'
                placeholder='Search...'
                onKeyDown={handleKeyDown}
                className='bg-slate-50 rounded-3xl px-3 py-2 font-normal'
            />
            <IoSearch className='absolute top-1/4 right-5 text-xl text-gray-500' />
        </div>
    );
};