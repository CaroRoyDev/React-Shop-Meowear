import React, { useState } from "react";
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { emailSignUpStart } from "../../redux/user/user.actions";


import { createStructuredSelector } from "reselect";
import { selectUserError } from "../../redux/user/user.selectors";

const SignUp = ({ userError, signUp }) => {


    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })


    const handleSubmit = async event => {
        event.preventDefault();
        signUp(userCredentials);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }


    const { displayName, email, password, confirmPassword } = userCredentials;
    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            {userError ? (<div className="formError">{userError?.message}</div>) : null}
            <form onSubmit={handleSubmit} className="sign-up-form">

                <FormInput
                    handleChange={handleChange}
                    label="Your name"
                    name="displayName"
                    type="text"
                    value={displayName}
                    autoComplete="name"
                />
                <FormInput
                    handleChange={handleChange}
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    autoComplete="email"
                />
                <FormInput
                    handleChange={handleChange}
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    autoComplete="new-password"
                />
                <FormInput
                    handleChange={handleChange}
                    label="Confirm password"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    autoComplete="new-password"
                />

                <CustomButton type="submit">Register</CustomButton>
            </form>
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    userError: selectUserError
})

const mapDispatchToProps = dispatch => ({
    signUp: (userCredentials) => dispatch(emailSignUpStart(userCredentials))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);