import {Link} from "react-router-dom";
import {useState} from "react";
import {GenresListItems} from "../../genres-list-items/GenresListItems.tsx";

export const Menu = () => {
    const [showGenres, setShowGenres] = useState(false);

    return (
        <>
            <nav className='hidden min-[1001px]:flex items-center gap-6'>
                <Link to='/movies'>Movies</Link>
                <div
                    className='relative h-[10dvh] flex items-center'
                    onMouseEnter={() => setShowGenres(true)}
                    onMouseLeave={() => setShowGenres(false)}
                >
                    <button className='hover:text-slate-50 transition'>Genres</button>
                </div>
            </nav>
            <div
                className={`
                    hidden min-[1001px]:block
                    absolute top-[10dvh] left-0 w-full bg-emerald-600 text-white text-lg p-6
                    transition-all duration-300 ease-in-out z-20
                    ${showGenres ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}
                `}
                onMouseEnter={() => setShowGenres(true)}
                onMouseLeave={() => setShowGenres(false)}
            >
                <ul className='grid grid-cols-5 max-[1340px]:grid-cols-4 max-[1100px]:grid-cols-3 gap-4 w-4/5 mx-auto text-center'>
                    <GenresListItems/>
                </ul>
            </div>
        </>
    );
};