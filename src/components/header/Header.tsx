import {Link} from "react-router-dom";
import {SearchInput} from "../search-input/SearchInput.tsx";
import {IoLogInOutline} from "react-icons/io5";
import {useState} from "react";
import {GenresListItems} from "../genres-list-items/GenresListItems.tsx";

export const Header = () => {
    const [showGenres, setShowGenres] = useState<boolean>(false);


    return (
        <>
            <div className='flex items-center justify-around h-full w-full text-xl font-medium relative'>
                <Link to={'/'}><h3 className='text-3xl font-semibold text tracking-[-0.07em]'>Movie<span
                    className='bg-orange-500/80 p-2 rounded-2xl ml-1 font-bold'>hub</span></h3></Link>
                <nav>
                    <ul className='flex gap-8 h-[10dvh]'>
                        <li className='h-full flex items-center'><Link to={'movies'}>Movie</Link></li>
                        <li className={`h-full flex items-center p-10 ${showGenres && 'text-slate-50'}`} onMouseEnter={() => setShowGenres(true)} onMouseLeave={() => setShowGenres(false)}>
                            <Link to={'/genres'}>Genres</Link>
                        </li>
                    </ul>
                </nav>
                <SearchInput/>
                <Link to={''} className='flex items-center gap-2'>Log In <IoLogInOutline/></Link>
            </div>
            <div
                className={`
                    absolute top-[10dvh] left-0 w-[75dvw] flex items-center justify-center p-6 bg-emerald-600 text-lg
                    transition-all duration-300 ease-in-out
                    ${showGenres ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}
                `}
                onMouseEnter={() => setShowGenres(true)} onMouseLeave={() => setShowGenres(false)}
            >
                <ul className='grid grid-cols-5 gap-4 w-4/5 mx-auto text-center'>
                    <GenresListItems/>
                </ul>
            </div>
        </>

    );
};