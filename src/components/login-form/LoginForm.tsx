import {useLoginForm} from "./useLoginForm.ts";

export const LoginForm = () => {
    const {showError, handleSubmit, handlerLogIn, errors, register, isValid} = useLoginForm();

    return (
        <div className='min-h-screen flex items-center justify-center bg-slate-50 px-4'>
            <div className='w-full max-w-md bg-white shadow-lg rounded-xl p-8'>
                <h2 className='text-2xl font-bold mb-6 text-center text-emerald-700'>Log In</h2>

                {showError && (
                    <div className='text-red-600 text-center mb-4'>
                        Wrong username or password
                    </div>
                )}

                <form onSubmit={handleSubmit(handlerLogIn)} className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium text-gray-700'>
                            {errors.username ? (
                                <span className='text-red-500'>{errors.username.message}</span>
                            ) : 'Username'}
                        </label>
                        <input
                            type='text'
                            {...register('username')}
                            className='border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition'
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium text-gray-700'>
                            {errors.password ? (
                                <span className='text-red-500'>{errors.password.message}</span>
                            ) : 'Password'}
                        </label>
                        <input
                            type='password'
                            {...register('password')}
                            className='border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition'
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={!isValid}
                        className='bg-emerald-600 text-white py-2 rounded-lg transition hover:bg-emerald-700 disabled:bg-gray-300 disabled:text-gray-500'
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};