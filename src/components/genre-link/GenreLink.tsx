import {FC} from "react";
import {Link} from "react-router-dom";

type GenreLinkProps = {
    genreId: number;
    genreName: string;
}

export const GenreLink:FC<GenreLinkProps> = ({genreId, genreName}) => {
    return (
        <>
            <Link to={'/genres/' + genreId}>{genreName}</Link>
        </>
    );
};