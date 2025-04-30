import {Link} from "react-router-dom";
import {SearchInput} from "../search-input/SearchInput.tsx";
import {IoLogInOutline} from "react-icons/io5";

export const Header = () => {
    return (
        <div className='flex items-center justify-around h-full w-full mx-auto text-xl font-medium'>
            <Link to={'/'}><h3 className='text-3xl font-semibold text tracking-[-0.07em]'>Movie<span
                className='bg-orange-500/80 p-2 rounded-2xl ml-1 font-bold'>hub</span></h3></Link>
            <nav>
                <ul className='flex gap-8'>
                    <li className=''><Link to={'movies'}>Movie</Link></li>
                    <li className=''><Link to={''}>Category</Link></li>
                </ul>
            </nav>
            <SearchInput/>
            <Link to={''} className='flex items-center gap-2'>Log In <IoLogInOutline/></Link>
        </div>
    );
};