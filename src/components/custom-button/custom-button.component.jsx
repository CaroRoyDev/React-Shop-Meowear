import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, ...buttonProps}) => (
    <button className={`${isGoogleSignIn ? 'google-signin' : '' } custom-button`} {...buttonProps}>
        {children}
    </button>
)

export default CustomButton;