import {useState} from "react";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {userActions} from "../../redux/slices/user-slice/userSlice.ts";
import {useNavigate} from "react-router-dom";

export const GuestInfo = () => {
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
            <h3 className="text-base sm:text-lg font-medium">Welcome Guest</h3>

            <div
                className={`
                    absolute top-full right-0 mt-2 w-48 bg-emerald-600 shadow-lg rounded-xl overflow-hidden border
                    transition-all duration-300 z-40
                    ${showMenu ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                `}
            >
                <ul className="flex flex-col text-lg text-slate-50">
                    <li className="px-4 py-2 border-b">Guest</li>
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