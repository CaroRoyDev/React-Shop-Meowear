import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, inverted, ...buttonProps}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-signin' : '' } custom-button`} {...buttonProps}>
        {children}
    </button>
)

export default CustomButton;