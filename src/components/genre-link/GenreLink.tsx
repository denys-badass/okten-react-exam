import {FC} from "react";
import {Link} from "react-router-dom";

type GenreLinkProps = {
    genre: string;
}

export const GenreLink:FC<GenreLinkProps> = ({genre}) => {
    return (
        <>
            <Link to={''}>{genre}</Link>
        </>
    );
};