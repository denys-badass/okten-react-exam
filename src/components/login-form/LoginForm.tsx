import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/userValidator.ts";
import {ILoginData} from "../../models/ILoginData.ts";
import {userActions} from "../../redux/slices/user-slice/userSlice.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useNavigate} from "react-router-dom";
import { useState} from "react";

export const LoginForm = () => {
    const [showError, setShowError] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<ILoginData>({
        mode: "onBlur", resolver: joiResolver(userValidator)
    });
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handlerLogIn = async (formData: ILoginData) => {
        const result = await dispatch(userActions.logIn(formData));
        if (userActions.logIn.fulfilled.match(result)) {
            navigate('/movies')
        } else {
            setShowError(true);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-emerald-700">Log In</h2>

                {showError && (
                    <div className="text-red-600 text-center mb-4">
                        Wrong username or password
                    </div>
                )}

                <form onSubmit={handleSubmit(handlerLogIn)} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">
                            {errors.username ? (
                                <span className="text-red-500">{errors.username.message}</span>
                            ) : 'Username'}
                        </label>
                        <input
                            type="text"
                            {...register('username')}
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">
                            {errors.password ? (
                                <span className="text-red-500">{errors.password.message}</span>
                            ) : 'Password'}
                        </label>
                        <input
                            type="password"
                            {...register('password')}
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={!isValid}
                        className="bg-emerald-600 text-white py-2 rounded-lg transition hover:bg-emerald-700 disabled:bg-gray-300 disabled:text-gray-500"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};