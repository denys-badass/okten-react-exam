import {Link} from "react-router-dom";

export const WelcomePage = () => {
    return (
        <div className='flex flex-col h-[300px] items-center justify-center gap-10 text-xl'>
            <h1>Welcome to MOVIE HUB</h1>
            <div className='flex gap-4'>
                <Link to={'movies'} className='border-2 border-emerald-700/80 p-2 rounded-lg hover:bg-emerald-700/80 hover:text-slate-50'>Log In</Link>
                <Link to={''} className='border-2 border-emerald-700/80 p-2 rounded-lg hover:bg-emerald-700/80 hover:text-slate-50'>Continue as a Guest</Link>
            </div>
        </div>
    );
};