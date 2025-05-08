import {FC} from "react";
import {usePagination} from "./usePagination.ts";


type PaginationProps = {
    page: number;
    totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({page, totalPages}) => {
    const {handlePrevious, handleNext} = usePagination(page, totalPages);
    return (
        <div className='flex w-full justify-center gap-10 mb-5'>
            <button onClick={handlePrevious} className='py-2 bg-emerald-600 w-1/9 rounded-2xl hover:text-slate-50 cursor-pointer'>Prev</button>
            <button onClick={handleNext} className='py-2 bg-emerald-600 w-1/9 rounded-2xl hover:text-slate-50 cursor-pointer'>Next</button>
        </div>
    );
};