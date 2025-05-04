import {Outlet} from "react-router-dom";
import {GenresListItems} from "../components/genres-list-items/GenresListItems.tsx";

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