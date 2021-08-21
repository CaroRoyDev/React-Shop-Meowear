import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from '../../assets/logo.svg';
import "./header.styles.scss";


const Header = ({ currentUser }) => (
    <header className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="header-menu">
            <Link className="menu-link" to="/shop">
                Shop
            </Link>
            <Link className="menu-link" to="/contact">
                Contact
            </Link>
            {
                currentUser ?
                    (<span className="menu-link" onClick={() => auth.signOut()}>
                        Sign out
                    </span>) 
                    :
                    (<Link className="menu-link" to="/signin">
                        Sign in
                    </Link>)
            }
            {currentUser ? <img src={currentUser.photoURL} alt="" /> : null}
        </div>
    </header>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);