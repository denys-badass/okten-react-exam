import {Link} from "react-router-dom";

export const HeaderLogo = () => {
    return (
        <>
            <Link to='/'>
                <h3 className='font-semibol'>
                        <span className='text-3xl max-[500px]:hidden'>Movie
                            <span className='bg-orange-500/80 px-2 py-1 rounded-lg ml-1 font-bold'>hub</span>
                        </span>
                    <span className='text-3xl min-[501px]:hidden'>M
                            <span className='bg-orange-500/80 px-1 py-[2px] rounded-lg font-bold'>h</span>
                        </span>
                </h3>
            </Link>
        </>
    );
};