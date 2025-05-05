import {FC} from "react";
import {Link} from "react-router-dom";
import {IGenre} from "../../models/IGenre.ts";

type GenreLinkProps = {
    genre: IGenre;
}

export const GenreLink:FC<GenreLinkProps> = ({genre}) => {
    const {id, name} = genre;
    return (
        <>
            <Link to={'/genre/' + id}>{name}</Link>
        </>
    );
};