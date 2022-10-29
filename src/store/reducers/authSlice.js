import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        token: ''
    },
    errorMessage: '',
    successMessage: '',
    showLoading: false,
    themeContext: { value: "dark", label: "Dark" }
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSignupConfirmed(state, action) {
            return {
                ...state,
                user: action.payload,
                errorMessage: '',
                successMessage: 'Signup Successfully Completed',
                showLoading: false
            }
        },
        logout(state, action) {
            localStorage.removeItem('userDetails');
            action.payload.push('/login');

            return {
                ...state,
                errorMessage: '',
                successMessage: '',
                user: {
                    username: '',
                    email: '',
                    first_name: '',
                    last_name: '',
                    token: ''
                }
            }
        },
        loginSignupFailed(state, action) {
            return {
                ...state,
                errorMessage: action.payload,
                successMessage: '',
                showLoading: false
            };
        },
        loadingToggle(state, action) {
            return {
                ...state,
                showLoading: action.payload,
            };
        },
        themeChange(state, action) {
            return {
                ...state,
                themeContext: action.payload
            }
        }
    }
})

export const {
    loginSignupConfirmed,
    logout,
    loginSignupFailed,
    loadingToggle,
    themeChange,
} = authSlice.actions

export default authSlice.reducer
