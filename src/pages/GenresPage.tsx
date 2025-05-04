import {GenresListItems} from "../components/genres-list-items/GenresListItems.tsx";
import {Outlet} from "react-router-dom";

export const GenresPage = () => {
    return (
        <section>
            <header>
                <ul>
                    <GenresListItems/>
                </ul>
            </header>
            <Outlet/>
        </section>
    );
};