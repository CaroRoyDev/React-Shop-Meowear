import React from "react";
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            formError: null,
        }
    }

    

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
    
        
        if(password !== confirmPassword){
            this.setState({formError: {message: "Ups ! Passwords don't mach"}});
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
        }
        catch(error){
            this.setState({formError: error});
            console.log("Couldn't create new user with mail and pass registration. ", error.message);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value})
    }

    render() {
        const { displayName, email, password, confirmPassword, formError } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                {formError ? (<div className="formError">{formError.message}</div>) : null}
                <form onSubmit={this.handleSubmit} className="sign-up-form">

                    <FormInput
                        handleChange={this.handleChange}
                        label="Your name"
                        name="displayName"
                        type="text"
                        value={displayName}
                        autoComplete="name"
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        label="Email"
                        name="email"
                        type="email"
                        value={email}
                        autoComplete="email"
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
                        autoComplete="new-password"
                    />
                    <FormInput
                        handleChange={this.handleChange}
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
}

export default SignUp;