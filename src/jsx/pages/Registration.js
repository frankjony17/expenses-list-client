import React,{useState} from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { connect, useDispatch } from 'react-redux';

import { loadingToggleAction, signupAction } from '../../store/actions/AuthActions';

// image
import logo from "../../images/logo-full.png";

function Register(props) {
    let errorsObj = {
        email: '',
        password1: '',
        password2: '',
        firstName: '',
        lastName: '',
    };
    const [errors, setErrors] = useState(errorsObj);

    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const dispatch = useDispatch();

    const validateForm = (error, errorObj) => {
        if (firstName === '') {
            errorObj.firstName = 'First Name is Required';
            error = true;
            swal('Oops', errorObj.firstName, "error").then();
        }

        if (lastName === '') {
            errorObj.lastName = 'Last Name is Required';
            error = true;
            swal('Oops', errorObj.lastName, "error").then();
        }

        if (email === '') {
            errorObj.email = 'Email is Required'
            error = true;
            swal('Oops', errorObj.email, "error").then();
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errorObj.email = 'Invalid email address'
            error = true;
            swal('Oops', errorObj.email, "error").then();
        }

        if (password1 === '') {
            errorObj.password1 = 'Password is Required';
            error = true;
            swal('Oops', errorObj.password1, "error").then();
        }

        if (password1.length < 6) {
            errorObj.password2 = 'Password must have at least 6 characters';
            error = true;
            swal('Oops', errorObj.password2, "error").then();
        }

        if (password1 !== password2) {
            errorObj.password2 = 'Passwords do not match';
            error = true;
            swal('Oops', errorObj.password2, "error").then();
        }

        setErrors(errorObj);
        return error;
    }

    function onSignUp(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };

        if (validateForm(error, errorObj)) return;

        dispatch(loadingToggleAction(true));
        dispatch(signupAction({
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password1,
        }, props.history));
    }
    return (
        <div className="authincation h-100 p-meddle">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-md-6">
                        <div className="authincation-content">
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <div className="auth-form">
                                        <div className="text-center mb-3">
                                            <Link to="/login">
                                                <img src={logo} alt="" />
                                            </Link>
                                        </div>
                                        <h4 className="text-center mb-4 ">Sign up your account</h4>

                                        {props.errorMessage && (
                                            <div className=''>{props.errorMessage}</div>
                                        )}
                                        {props.successMessage && (
                                            <div className=''>{props.successMessage}</div>
                                        )}

                                        <form onSubmit={onSignUp}>
                                            <div className="form-group mb-3">
                                                <label className="mb-1 ">
                                                    <strong>First name</strong>
                                                </label>
                                                <input type="text" className="form-control" placeholder="first name"
                                                       defaultValue={firstName}
                                                       onChange={(e) => setFirstName(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="mb-1 ">
                                                    <strong>Last name</strong>
                                                </label>
                                                <input type="text" className="form-control" placeholder="last name"
                                                       defaultValue={lastName}
                                                       onChange={(e) => setLastName(e.target.value)}
                                                />
                                            </div>

                                            <div className="form-group mb-3">
                                                <label className="mb-1 ">
                                                    <strong>Email</strong>
                                                </label>
                                                <input
                                                    defaultValue={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="form-control"
                                                    placeholder="email"
                                                />
                                            </div>
                                            {errors.email && <div>{errors.email}</div>}

                                            <div className="form-group mb-3">
                                                <label className="mb-1 ">
                                                    <strong>Password</strong>
                                                </label>
                                                <input
                                                    defaultValue={password1}
                                                    onChange={(e) => setPassword1(e.target.value)}
                                                    className="form-control"
                                                    placeholder="password"
                                                />
                                            </div>
                                            {errors.password1 && <div>{errors.password1}</div>}

                                            <div className="form-group mb-3">
                                                <label className="mb-1 ">
                                                    <strong>Confirm Password</strong>
                                                </label>
                                                <input
                                                    defaultValue={password2}
                                                    onChange={(e) => setPassword2(e.target.value)}
                                                    className="form-control"
                                                    placeholder="confirm password"
                                                />
                                            </div>
                                            {errors.password2 && <div>{errors.password2}</div>}

                                            <div className="text-center mt-4">
                                                <button type="submit" className="btn btn-primary btn-block">
                                                    Sign me up
                                                </button>
                                            </div>
                                        </form>

                                        <div className="new-account mt-3">
                                            <p className="">Already have an account?{" "} <Link className="text-primary" to="/login">Sign in</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};

export default connect(mapStateToProps)(Register);

