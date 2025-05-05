import {LoginForm} from "../components/login-form/LoginForm.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/user-slice/userSlice.ts";

export const LoginPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.logOut())
    }, [dispatch]);

    return (
        <div className='w-2/4 h-[50dvh] mx-auto flex flex-col gap-6 justify-center items-center rounded-lg'>
            <h2>Log In</h2>
            <LoginForm/>
        </div>
    );
};