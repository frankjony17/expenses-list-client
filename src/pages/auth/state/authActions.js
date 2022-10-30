import {
    formatError,
    login,
    runLogoutTimer,
    saveTokenInLocalStorage,
    signUp,
} from '../../../services/auth/authService';


import { loginSignupFailed, loginSignupConfirmed } from "./authSlice";


export const signupAction = (user, history) => {
    return async (dispatch) => {
        try {
            const response = await signUp(user);

            saveTokenInLocalStorage(response.data);
            runLogoutTimer(dispatch, 1440000, history);

            dispatch(loginSignupConfirmed(response.data));
            history.push('/dashboard');
        } catch (error) {
            const errorMessage = formatError(error.response.data.error);
            dispatch(loginSignupFailed(errorMessage));
        }
    };
}

export function loginAction(email, password, history) {
    return async (dispatch) => {
        try {
            const response = await login(email, password);

            saveTokenInLocalStorage(response.data);
            runLogoutTimer(dispatch, 1440000, history);

            dispatch(loginSignupConfirmed(response.data));
            history.push('/dashboard');
        } catch (error) {
            const errorMessage = formatError(error.response.data.error);
            dispatch(loginSignupFailed(errorMessage));
        }
    };
}
