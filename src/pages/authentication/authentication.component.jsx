import React from "react";
import "./authentication.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const Authentication = () => (
    <div className="authentication">
        <SignIn/>
        <SignUp/>
    </div>
)

export default Authentication;