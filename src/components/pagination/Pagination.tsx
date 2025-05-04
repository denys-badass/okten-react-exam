import {useSearchParams} from "react-router-dom";
import {FC} from "react";


type PaginationProps = {
    page: number;
    totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({page, totalPages}) => {
    const [_, setQuery] = useSearchParams();

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
            });;
        }
    }

    return (
        <div className='flex w-full justify-center gap-10 mb-5'>
            <button onClick={handlePrevious} className='py-2 bg-emerald-600 w-1/9 rounded-2xl hover:text-slate-50 cursor-pointer'>Prev</button>
            <button onClick={handleNext} className='py-2 bg-emerald-600 w-1/9 rounded-2xl hover:text-slate-50 cursor-pointer'>Next</button>
        </div>
    );
};