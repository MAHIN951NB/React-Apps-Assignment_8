import { useState } from 'react';
import Picture from '../assets/logo.png';
import { NavLink } from 'react-router';
import { ImGithub } from "react-icons/im";
import '../Display/Btn.css';
import { dark } from './DarkMode';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
    const [isdark, issetDark] = useState(false);
    const [iswhite, issetWhite] = useState(false);

    const active = ({ isActive }) => {
        return isActive ? "text-purple-600 font-bold" : "text-gray-700 hover:text-purple-600 transition-colors";
    };

    const main = () => {
        dark();
        if (!iswhite) {
            issetWhite(true);
            issetDark(true);
        }
        if (isdark) {
            issetDark(false);
            issetWhite(false);
        }
    };

    return (
        <nav
            id='navbar'
            className='select-none flex justify-between shadow-md bg-white/95 backdrop-blur-md px-3 sm:px-6 md:px-8 py-2.5 sm:py-3 items-center fixed top-0 left-0 w-full z-30 border-b border-gray-150'
        >
            <NavLink to='/' className='flex items-center gap-2 shrink-0'>
                <img width={32} className='h-auto object-contain' src={Picture} alt="Hero logo" />
                <span className='font-bold hidden sm:inline text-base sm:text-lg tracking-tight'>
                    Hero<span className='text-purple-600'>.IO</span>
                </span>
            </NavLink>

            <div className='flex gap-x-3 sm:gap-x-6 md:gap-x-8 font-semibold text-xs sm:text-sm md:text-base'>
                <NavLink className={active} to=''>Home</NavLink>
                <NavLink className={active} to='/apps'>Apps</NavLink>
                <NavLink className={active} to='/installed'>Installation</NavLink>
            </div>

            <div className='flex items-center gap-x-2 sm:gap-x-4 shrink-0'>
                <button
                    onClick={main}
                    className='p-1.5 sm:p-2 text-lg sm:text-xl rounded-lg hover:bg-gray-100 transition-colors cursor-pointer text-gray-700'
                    aria-label="Toggle theme"
                >
                    {iswhite ? <MdOutlineDarkMode /> : <MdDarkMode />}
                </button>
                <a
                    href='https://github.com/MAHIN951NB'
                    target='_blank'
                    rel='noreferrer'
                    className='shrink-0'
                >
                    <button className='load-btn !px-2.5 !py-1 sm:!px-4 sm:!py-2 text-xs sm:text-sm flex items-center gap-1.5'>
                        <ImGithub className='text-sm sm:text-base' />
                        <span className='hidden md:inline'>GitHub</span>
                    </button>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
