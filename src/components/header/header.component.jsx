import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/logo.svg';
import "./header.styles.scss";


const Header = () => (
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
        </div>
    </header>
)

export default Header;