import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  height: 70px;
  padding: 20px 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 100;
`;

const LogoWrapper = styled(Link)`
  height: 100%;
  width: auto;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const MenuWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .menu-link {
    padding: 10px 15px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.2em;
    cursor: pointer;
  }
`;

const UserPictureWrapper = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export { HeaderWrapper, LogoWrapper, MenuWrapper, UserPictureWrapper };
