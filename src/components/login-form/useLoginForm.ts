import {useState} from "react";
import {useForm} from "react-hook-form";
import {ILoginData} from "../../models/ILoginData.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/userValidator.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useNavigate} from "react-router-dom";
import {userActions} from "../../redux/slices/user-slice/userSlice.ts";

export const useLoginForm = () => {
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

    return {
        showError,
        handleSubmit,
        handlerLogIn,
        errors,
        register,
        isValid
    }
}