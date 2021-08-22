import { React } from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { toggleCartVisibility } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss"

const CartIcon = ({ toggleCartVisibility }) => (
    <div className="cart-icon" onClick={toggleCartVisibility}>
        <ShoppingIcon className="icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartVisibility: () => dispatch(toggleCartVisibility())
})

export default connect(null,mapDispatchToProps)(CartIcon);