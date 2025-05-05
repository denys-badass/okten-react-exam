import {Link, useNavigate} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {userActions} from "../redux/slices/user-slice/userSlice.ts";

export const WelcomePage = () => {
    const navigate = useNavigate();
    const { user, isGuest } = useAppSelector(state => state.userStore);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (user || isGuest) {
            navigate('/movies');
        }
    }, [user, isGuest, navigate]);

    const handleGuestLogin = () => {
        dispatch(userActions.guestLogin());
        navigate('/movies');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-200 via-white to-emerald-300 px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-800 drop-shadow-lg mb-12">
                Welcome to <span className="text-emerald-600">MOVIE HUB</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-6">
                <Link
                    to="/login"
                    className="px-6 py-3 text-lg sm:text-xl bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 shadow-lg transition-all duration-300"
                >
                    Log In
                </Link>
                <button
                    onClick={handleGuestLogin}
                    className="px-6 py-3 text-lg sm:text-xl border-2 border-emerald-600 text-emerald-700 rounded-xl hover:bg-emerald-600 hover:text-white shadow-lg transition-all duration-300 cursor-pointer"
                >
                    Continue as a Guest
                </button>
            </div>
        </div>
    );
};