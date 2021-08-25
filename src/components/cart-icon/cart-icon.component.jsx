import { React } from "react";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { toggleCartVisibility } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss"

const CartIcon = ({ toggleCartVisibility, cartItemsCount }) => (
    <div className="cart-icon" onClick={toggleCartVisibility}>
        <ShoppingIcon className="icon"/>
        <span className="item-count">{cartItemsCount}</span>
    </div>
)

const mapStateToProps = (state) => ({
    cartItemsCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartVisibility: () => dispatch(toggleCartVisibility())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);