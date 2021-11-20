import styled, { css } from "styled-components";
import { lighten } from "polished";

const buttonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const invertedButtonStyles = css`
  background-color: #fff;
  color: #000;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const googleSignInStyles = (props) => {
  const {
    theme: { primaryColor },
  } = props;
  return css`
  background-color: ${primaryColor};
  color: white;

  &:hover {
    background-color: ${lighten(0.1, primaryColor)}};
  }
`;
};

const getButtonStyles = ({ isGoogleSignIn, inverted }) => {
  if (isGoogleSignIn) {
    return googleSignInStyles;
  }

  return inverted ? invertedButtonStyles : buttonStyles;
};

const ButtonWrapper = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 1em;
  padding: 0 35px 0 35px;
  font-size: 15px;

  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;

  ${getButtonStyles}
`;

export { ButtonWrapper };
