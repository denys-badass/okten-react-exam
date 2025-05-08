import {FC} from "react";
import {Link} from "react-router-dom";
import {GenresListItems} from "../../genres-list-items/GenresListItems.tsx";
import {AuthMenu} from "../auth-menu/AuthMenu.tsx";

type HamburgerMenuProps = {
    isOpen: boolean;
    toggle: () => void;
}

export const HamburgerMenu:FC<HamburgerMenuProps> = ({isOpen, toggle}) => {
    return (
        <>
            <div
                className={`min-[1001px]:hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <nav className='flex flex-col items-center gap-4 py-4 bg-emerald-600 w-full text-center'>
                    <Link to='/movies' onClick={toggle}>Movies</Link>
                    <details className='w-full'>
                        <summary className='cursor-pointer py-1'>Genres</summary>
                        <ul className='grid grid-cols-2 gap-2 mt-2 text-sm px-4'>
                            <GenresListItems/>
                        </ul>
                    </details>
                    <div className='hidden max-[1001px]:flex items-center gap-6'>
                        <AuthMenu/>
                    </div>
                </nav>
            </div>
        </>
    );
};