import {useSortHandle} from "../../hooks/useSortHandle.ts";


export const SortBar = () => {
    const {sortBy, handleSortChange} = useSortHandle();

    return (
        <div
            className='
                flex items-center gap-2 self-end
                w-1/3 max-[1073px]:w-full max-[1073px]:justify-center
                text-sm px-2 mt-2'>
            <label htmlFor='sort'>Sort by:</label>
            <select
                name='sort'
                id='sort'
                value={sortBy}
                className='p-2 bg-white text-black rounded-md'
                onChange={handleSortChange}>
                <option value='popularity.desc'>Popularity</option>
                <option value='vote_average.desc'>Rating</option>
                <option value='vote_count.desc'>Reviews</option>
                <option value='primary_release_date.desc'>Release year</option>
                <option value='title.desc'>Title</option>
            </select>
        </div>
    );
};