import { React } from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.style.scss";

const CartDropdown = ({ cartDropdownIsHidden, cartItems }) => (

    cartDropdownIsHidden ? null :
        (<div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.slice().reverse().map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}></CartItem>
                    ))
                }
            </div>
            <CustomButton>Go to checkout</CustomButton>
        </div>)

)

const mapStateToProps = (state) => ({
    cartDropdownIsHidden: state.cart.hidden,
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);