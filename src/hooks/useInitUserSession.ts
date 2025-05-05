import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/user-slice/userSlice.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {useNavigate} from "react-router-dom";

export const useInitUserSession = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const sessionType = localStorage.getItem('sessionType');

        if (sessionType === 'user') {
            const userStr = localStorage.getItem('user');
            if (userStr) {
                const user: IUserWithTokens = JSON.parse(userStr);
                dispatch({type: 'userSlice/logIn/fulfilled', payload: user});
            }
        } else if (sessionType === 'guest') {
            dispatch(userActions.guestLogin());
        }

    }, [dispatch, navigate]);
}