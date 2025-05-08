import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {WelcomePage} from "../pages/WelcomePage.tsx";
import {SearchPage} from "../pages/SearchPage.tsx";
import {MoviesPage} from "../pages/MoviesPage.tsx";
import {GenrePage} from "../pages/GenrePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {LoginRoute} from "./LoginRoute.tsx";

export const routes = createBrowserRouter([
    { path: '/', element: <App/>, children: [
            {index: true, element: <WelcomePage/>},
            {path: 'login', element: <LoginPage/>},
            {path: 'search', element: <LoginRoute><SearchPage/></LoginRoute>},
            {path: 'movies', element: <LoginRoute><MoviesPage/></LoginRoute>},
            {path: 'genre/:genreId', element: <LoginRoute><GenrePage/></LoginRoute>}
        ]},
]);