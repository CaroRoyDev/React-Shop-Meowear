import React from "react";
import { connect } from "react-redux";
import { signOutStart } from "../../redux/user/user.actions";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";


import { selectCurrentUser } from "../../redux/user/user.selectors";

import { HeaderWrapper, LogoWrapper, MenuWrapper, UserPictureWrapper } from "./header.styles";


const Header = ({ currentUser, signOut }) => (
    <HeaderWrapper className="header">
        <LogoWrapper className="logo-container" to="/">
            <Logo className="logo" />
        </LogoWrapper>
        <MenuWrapper>
            <Link className="menu-link" to="/shop">
                Shop
            </Link>
            <Link className="menu-link" to="/contact">
                Contact
            </Link>
            <span className="menu-link">
                <CartIcon />
            </span>
            {
                currentUser ?
                    (<span className="menu-link" onClick={signOut}>
                        Sign out
                    </span>)
                    :
                    (<Link className="menu-link" to="/signin">
                        Sign in
                    </Link>)
            }
            {currentUser ? <UserPictureWrapper src={currentUser.photoURL} alt="User profile picture" /> : null}
        </MenuWrapper>
        <CartDropdown />
    </HeaderWrapper>
)

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);