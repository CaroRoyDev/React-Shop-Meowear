import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your mail and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        handleChange={this.handleChange}
                        label="Email"
                        name="email"
                        type="email"
                        value={email}
                        required
                    />

                    <FormInput
                        onChange={this.handleChange}
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
                        required
                    />

                    <CustomButton type="submit" >
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In with Google
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;