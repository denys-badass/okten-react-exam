import {useState} from "react";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.ts";
import {useNavigate} from "react-router-dom";
import {userActions} from "../../../redux/slices/user-slice/userSlice.ts";

export const useUserMenu = () => {
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

    const handleMouseEnter = () => {
        if (window.innerWidth > 1000) setShowMenu(true);
    };

    const handleMouseLeave = () => {
        if (window.innerWidth > 1000) setShowMenu(false);
    };

    return {
        showMenu,
        toggleMenu,
        handleMouseEnter,
        handleMouseLeave,
        handleLogout
    };
};