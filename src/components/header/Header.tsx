import {Link} from "react-router-dom";
import {SearchInput} from "../search-input/SearchInput.tsx";
import {IoLogInOutline} from "react-icons/io5";
import {useState} from "react";
import {GenresListItems} from "../genres-list-items/GenresListItems.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {GuestInfo} from "../guest-info/GuestInfo.tsx";
import {UserInfo} from "../user-info/UserInfo.tsx";

export const Header = () => {
    const [showGenres, setShowGenres] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user, isGuest } = useAppSelector(state => state.userStore);

    return (
        <div className="relative bg-emerald-600 shadow-md z-30 text-xl font-medium">
            <div className="flex justify-between items-center px-4 max-[1000px]:px-6 h-[10dvh] w-[75dvw] max-[1000px]:w-full mx-auto">
                <Link to="/">
                    <h3 className="text-2xl max-[1000px]:text-xl font-semibold">
                        Movie
                        <span className="bg-orange-500/80 px-2 py-1 rounded-lg ml-1 font-bold">hub</span>
                    </h3>
                </Link>

                <div className="flex-1 flex justify-center px-4">
                    <SearchInput />
                </div>

                <div className="hidden min-[1001px]:flex items-center gap-6">
                    <nav className="flex gap-6 items-center">
                        <Link to="/movies">Movies</Link>
                        <div
                            className="relative h-[10dvh] flex items-center"
                            onMouseEnter={() => setShowGenres(true)}
                            onMouseLeave={() => setShowGenres(false)}
                        >
                            <button className="hover:text-slate-50 transition">Genres</button>
                        </div>
                    </nav>
                    {user ? <UserInfo user={user} /> : isGuest ? <GuestInfo /> : (
                        <Link to="/login" className="flex items-center gap-2">
                            Log In <IoLogInOutline />
                        </Link>
                    )}
                </div>

                <button
                    className="min-[1001px]:hidden p-2 text-2xl"
                    onClick={() => setMobileMenuOpen(prev => !prev)}
                >
                    ☰
                </button>
            </div>

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
                <ul className="grid grid-cols-5 gap-4 w-4/5 mx-auto text-center">
                    <GenresListItems />
                </ul>
            </div>

            <div className={`min-[1001px]:hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <nav className="flex flex-col items-center gap-4 py-4 bg-emerald-600 w-full text-center">
                    <Link to="/movies" onClick={() => setMobileMenuOpen(false)}>Movies</Link>
                    <details className="w-full">
                        <summary className="cursor-pointer py-1">Genres</summary>
                        <ul className="grid grid-cols-2 gap-2 mt-2 text-sm px-4">
                            <GenresListItems />
                        </ul>
                    </details>
                    {user ? <UserInfo user={user} /> : isGuest ? <GuestInfo /> : (
                        <Link to="/login" className="flex items-center gap-2">
                            Log In <IoLogInOutline />
                        </Link>
                    )}
                </nav>
            </div>
        </div>
    );
};