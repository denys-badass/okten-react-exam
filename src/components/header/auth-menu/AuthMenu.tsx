import {UserMenu} from "../user-menu/UserMenu.tsx";
import {Link} from "react-router-dom";
import {IoLogInOutline} from "react-icons/io5";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.ts";

export const AuthMenu = () => {
    const {user, isGuest} = useAppSelector(state => state.userStore);

    return (
        <>
            {user ? <UserMenu user={user}/> : isGuest ? <UserMenu isGuest={true}/> : (
                <Link to='/login' className='flex items-center gap-2'>
                    Log In <IoLogInOutline/>
                </Link>
            )}
        </>
    );
};