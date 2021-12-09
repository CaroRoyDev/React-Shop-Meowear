import React from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


import { googleSigninStart, emailSigninStart } from "../../redux/user/user.actions";
import "./sign-in.styles.scss";


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignin } = this.props;
        const { email, password } = this.state;
        emailSignin(email, password);
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;
        const { googleSignIn } = this.props;
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
                        autoComplete="email"
                    />

                    <FormInput
                        onChange={this.handleChange}
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
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
}

const mapDispatchToProps = dispatch => ({
    googleSignIn: () => dispatch(googleSigninStart()),
    emailSignin: (email, password) => dispatch(emailSigninStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn);