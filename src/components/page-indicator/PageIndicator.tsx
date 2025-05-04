import {FC} from "react";

type PageProps = {
    page: number,
}

export const PageIndicator: FC<PageProps> = ({page}) => {
    return (
        <>
            <div className='flex justify-center items-center gap-4 mb-6'>
                <div className='w-1/3 h-[2px] bg-gradient-to-r from-orange-500 to-slate-50'></div>
                <p>Page {page}</p>
                <div className='w-1/3 h-[2px] bg-gradient-to-l from-orange-500 to-slate-50'></div>
            </div>
        </>
    );
};