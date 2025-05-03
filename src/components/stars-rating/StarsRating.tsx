import {FC} from "react";
import {FaRegStar, FaRegStarHalfStroke, FaStar} from "react-icons/fa6";

type StarsRatingProp = {
    rating: number;
}

export const StarsRating:FC<StarsRatingProp> = ({rating}) => {
    const stars = [];
    const fiveRating = rating / 2;

    for (let i = 1; i <= 5; i++) {
        if (fiveRating >= i) {
            stars.push(<FaStar size={20} key={i}/>)
        } else if (fiveRating > i - 0.5) {
            stars.push(<FaRegStarHalfStroke key={i}/> )
        } else {
            stars.push(<FaRegStar key={i}/>)
        }
    }

    return (
        <div className='flex'>
            {stars.map((star, index) => (
                <div key={index} className=' flex text-amber-500 text-xl'>
                    {star}
                </div>
            ))}
        </div>
    );
};