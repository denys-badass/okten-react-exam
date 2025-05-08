import {FC, ReactNode} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {Navigate} from "react-router-dom";
import {Preloader} from "../components/preloader/Preloader.tsx";

type LoginRouteProps = {
    children: ReactNode;
}

export const LoginRoute: FC<LoginRouteProps> = ({children}) => {
    const { user, isGuest, isLoading } = useAppSelector(state => state.userStore);

    if (isLoading) return <Preloader/>

    if (!user && !isGuest) {
        return <Navigate to={'/login'} replace/>
    }

    return children
};