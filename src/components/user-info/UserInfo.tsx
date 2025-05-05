import {FC, useState} from "react";
import {IUserWithTokens} from "../../models/IUserWithTokens.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useNavigate} from "react-router-dom";
import {userActions} from "../../redux/slices/user-slice/userSlice.ts";
import {UserAvatar} from "../user-avatar/UserAvatar.tsx";

type UserProps = {
    user: IUserWithTokens;
}

export const UserInfo: FC<UserProps> = ({ user }) => {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(userActions.logOut());
        navigate("/");
    };

    const toggleMenu = () => {
        if (window.innerWidth <= 1000) {
            setShowMenu(prev => !prev);
        }
    };

    return (
        <div
            className="relative h-full flex items-center gap-3 cursor-pointer select-none"
            onMouseEnter={() => window.innerWidth > 1000 && setShowMenu(true)}
            onMouseLeave={() => window.innerWidth > 1000 && setShowMenu(false)}
            onClick={toggleMenu}
        >
            <UserAvatar user={user} />
            <h3 className="text-base sm:text-lg font-medium">{user.username}</h3>

            <div
                className={`
                    absolute top-full right-0 mt-2 w-56 bg-emerald-600 shadow-lg rounded-xl overflow-hidden border
                    transition-all duration-300 z-40
                    ${showMenu ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                `}
            >
                <ul className="flex flex-col text-sm text-slate-50">
                    <li className="px-4 py-2 border-b">{user.firstName} {user.lastName}</li>
                    <li
                        onClick={handleLogout}
                        className="px-4 py-2 hover:bg-slate-50 hover:text-emerald-600 transition-colors cursor-pointer"
                    >
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    );
};