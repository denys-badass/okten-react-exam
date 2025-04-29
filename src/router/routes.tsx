import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {WelcomePage} from "../pages/WelcomePage.tsx";
import {SearchPage} from "../pages/SearchPage.tsx";
import {MoviesPage} from "../pages/MoviesPage.tsx";

export const routes = createBrowserRouter([
    { path: '/', element: <App/>, children: [
            {index: true, element: <WelcomePage/>},
            {path: 'search', element: <SearchPage/>},
            {path: 'movies', element: <MoviesPage/>}
        ]},
])