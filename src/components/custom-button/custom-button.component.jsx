import React from "react";
import { ButtonWrapper } from "./custom-button.styles";

const CustomButton = ({children, additionnalClasses, ...buttonProps}) => (
    <ButtonWrapper className={additionnalClasses} {...buttonProps}>
        {children}
    </ButtonWrapper>
)

export default CustomButton;