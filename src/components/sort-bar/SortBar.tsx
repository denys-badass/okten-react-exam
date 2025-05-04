import {useSearchParams} from "react-router-dom";
import {ChangeEvent} from "react";


export const SortBar = () => {
    const [query, setQuery] = useSearchParams({page: '1'})
    const sortBy = query.get('sort_by') || 'popularity.desc';

    const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(query);
        params.set('sort_by', e.target.value);
        setQuery(params);
    }

    return (
        <>
            <div className='flex items-center w-1/3 gap-4 self-end'>
                <label htmlFor="sort">Sort by:</label>
                <select
                    name='sort'
                    id='sort'
                    value={sortBy}
                    className='p-2'
                    onChange={handleSortChange}
                >
                    <option value='popularity.desc'>Popularity</option>
                    <option value='vote_average.desc'>Rating</option>
                    <option value='vote_count.desc'>Reviews</option>
                    <option value='primary_release_date.desc'>Release year</option>
                    <option value='title.desc'>Title</option>
                </select>
            </div>
        </>
    );
};