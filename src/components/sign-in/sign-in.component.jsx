import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


import { googleSigninStart, emailSigninStart } from "../../redux/user/user.actions";
import "./sign-in.styles.scss";


const SignIn = ({ emailSignin, googleSignIn }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

    const handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = userCredentials;
        emailSignin(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }


    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your mail and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput
                    handleChange={handleChange}
                    label="Email"
                    name="email"
                    type="email"
                    value={userCredentials.email}
                    required
                    autoComplete="email"
                />

                <FormInput
                    onChange={handleChange}
                    label="Password"
                    name="password"
                    type="password"
                    value={userCredentials.password}
                    required
                    autoComplete="current-password"
                />

                <CustomButton type="submit" >
                    Sign In
                </CustomButton>
                <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
                    Sign In with Google
                </CustomButton>
            </form>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    googleSignIn: () => dispatch(googleSigninStart()),
    emailSignin: (email, password) => dispatch(emailSigninStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn);