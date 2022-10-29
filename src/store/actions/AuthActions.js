import {
    formatError,
    login,
    runLogoutTimer,
    saveTokenInLocalStorage,
    signUp,
} from '../../services/AuthService';


export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';
export const THEME_ACTION = '[Theme action] change theme action';


export const signupAction = (user, history) => {
    return async (dispatch) => {
        try {
            const response = await signUp(user);

            saveTokenInLocalStorage(response.data);
            runLogoutTimer(dispatch, 1440000, history);

            dispatch(confirmedSignupAction(response.data));
            history.push('/dashboard');
        } catch (error) {
            const errorMessage = formatError(error.response.data.error);
            dispatch(signupFailedAction(errorMessage));
        }
    };
}

export function logout(history) {
    localStorage.removeItem('userDetails');
    history.push('/login');
    return {
        type: LOGOUT_ACTION,
    };
}

export function loginAction(email, password, history) {
    return async (dispatch) => {
        try {
            const response = await login(email, password);

            saveTokenInLocalStorage(response.data);
            runLogoutTimer(dispatch, 1440000, history);

            dispatch(loginConfirmedAction(response.data));
            history.push('/dashboard');
        } catch (error) {
            const errorMessage = formatError(error.response.data.error);
            dispatch(loginFailedAction(errorMessage));
        }
    };
}

export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    };
}

export function loginConfirmedAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    };
}

export function confirmedSignupAction(payload) {
    return {
        type: SIGNUP_CONFIRMED_ACTION,
        payload,
    };
}

export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: message,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}

export function changeThemeAction(theme) {
    return {
        type: THEME_ACTION,
        payload: theme,
    };
}