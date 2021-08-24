import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, inverted, additionnalClasses, ...buttonProps}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-signin' : '' } custom-button ${additionnalClasses}`} {...buttonProps}>
        {children}
    </button>
)

export default CustomButton;