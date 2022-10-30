import axios from 'axios';

import { sweetAlert } from "../../utils";
import {loginSignupConfirmed, logout} from "../../pages/auth/state/authSlice";


const HEADERS = {
    headers: {
        'Content-Type': 'application/json',
    }
};

export const signUp = async (user) => {
    const postData = {
        username: user.email,
        password: user.password,
        password2: user.password,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
    };
    return await axios.post(
        `${process.env.REACT_APP_SERVER_HOST}/api/v1/auth/register`,
        postData,
        HEADERS
    );
};

export const login = async (email, password) => {
    const postData = {
        username: email,
        password
    };
    return axios.post(
        `${process.env.REACT_APP_SERVER_HOST}/api/v1/auth/token`,
        postData,
        HEADERS
    );
}

export function saveTokenInLocalStorage(tokenDetails) {
    tokenDetails.expireDate = new Date(
        new Date().getTime() + 1440000, // 24 hours
    );
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer, history) {
    setTimeout(() => {
        dispatch(logout(history));
    }, timer);
}

export function checkAutoLogin(dispatch, history) {
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(logout(history));
        return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expireDate);
    let todayDate = new Date();

    if (todayDate > expireDate) {
        dispatch(logout(history));
        return;
    }
    dispatch(loginSignupConfirmed(tokenDetails));

    const timer = expireDate.getTime() - todayDate.getTime();
    runLogoutTimer(dispatch, timer, history);
}

export function formatError(err) {
    if (typeof err.response == 'undefined' || typeof err.response.data == 'undefined') {
        sweetAlert(err.toString(), {icon: 'error', position: 'top-end', showConfirmButton: false});
        return;
    }
    let error = err.response.data.error;

    switch (true) {
        case 'email' in error.details:
            let error_email = error.details.email;
            sweetAlert(
                Array.isArray(error_email) ? `Email: ${error_email.join('\n')}` : `Email: ${error_email}`,
                "error");
            break;
        case 'username' in error.details:
            let error_username = error.details.username;
            sweetAlert(
                Array.isArray(error_username) ? `Username: ${error_username.join('\n')}` : `Username: ${error_username}`,
                "error");
            break;
        case 'password' in error.details:
            let error_password = error.details.password;
            sweetAlert(
                Array.isArray(error_password) ? `Password: ${error_password.join('\n')}` : `Password: ${error_password}`,
                "error");
            break;
        case 'error' in error.details:
            let errors = error.details.error;
            sweetAlert(Array.isArray(errors) ? errors.join('\n') : errors, "error");
            break;
        case 'detail' in error.details: // Incorrect authentication credentials. 401
            return Array.isArray(error.details.detail) ? error.details.detail.join('\n') : error.details.detail;
        default:
            console.log(error);
            return '';
    }
}