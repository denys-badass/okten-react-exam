import {SearchInput} from "./search-input/SearchInput.tsx";
import {HeaderLogo} from "./header-logo/HeaderLogo.tsx";
import {Menu} from "./menu/Menu.tsx";
import {AuthMenu} from "./auth-menu/AuthMenu.tsx";
import {HamburgerMenu} from "./hamburger-menu/HamburgerMenu.tsx";
import {GiHamburgerMenu} from "react-icons/gi";
import {useState} from "react";

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
    }

    return (
        <div className='relative bg-emerald-600 shadow-md z-30 text-xl font-medium'>
            <div className='flex justify-between items-center px-4 max-[1000px]:px-6 h-[10dvh] w-[75dvw] max-[1000px]:w-full mx-auto'>
                <div>
                    <HeaderLogo/>
                </div>
                <div className='relative w-1/4 max-[800px]:w-[200px]'>
                    <SearchInput/>
                </div>
                <div>
                    <Menu/>
                </div>
                <div className='hidden min-[1001px]:flex items-center gap-6'>
                    <AuthMenu />
                </div>
                <div>
                    <button
                        className='min-[1001px]:hidden p-2 text-2xl'
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                    >
                        <GiHamburgerMenu />
                    </button>
                </div>

            </div>
            <HamburgerMenu isOpen={mobileMenuOpen} toggle={toggleMobileMenu} />
        </div>
    );
};