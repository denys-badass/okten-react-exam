import {FC} from "react";
import {IUserWithTokens} from "../../../models/IUserWithTokens.ts";
import {UserAvatar} from "../user-avatar/UserAvatar.tsx";
import {useUserMenu} from "./useUserMenu.tsx";


type UserMenuProps = {
    user?: IUserWithTokens;
    isGuest?: boolean;
};

export const UserMenu: FC<UserMenuProps> = ({ user, isGuest = false }) => {
    const {showMenu, toggleMenu, handleMouseLeave, handleMouseEnter, handleLogout} = useUserMenu();

    return (
        <div
            className='relative h-full flex items-center gap-3 cursor-pointer select-none'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleMenu}
        >
            {!isGuest && user && <UserAvatar user={user} />}
            <h3 className='font-bold sm:text-lg'>
                {isGuest ? 'Welcome Guest' : user?.username}
            </h3>

            <div
                className={`
                    absolute top-full right-0 mt-2 ${isGuest ? 'w-48' : 'w-56'} 
                    bg-emerald-600 shadow-lg rounded-xl overflow-hidden border
                    transition-all duration-300 z-40
                    ${showMenu ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                `}
            >
                <ul className='flex flex-col text-sm sm:text-base text-slate-50'>
                    <li className='px-4 py-2 border-b'>
                        {isGuest ? "Guest" : `${user?.firstName} ${user?.lastName}`}
                    </li>
                    <li
                        onClick={handleLogout}
                        className='px-4 py-2 hover:bg-slate-50 hover:text-emerald-600 transition-colors cursor-pointer'
                    >
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    );
};