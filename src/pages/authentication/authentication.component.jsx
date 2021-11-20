import React from "react";
import "./authentication.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { xmasTheme } from "../../themes/themes";
import { ThemeProvider } from "styled-components";

const AuthenticationPage = () => (
    <ThemeProvider theme={xmasTheme} >
        <div className="authentication">
            <SignIn />
            <SignUp />
        </div>
    </ThemeProvider>
)

export default AuthenticationPage;