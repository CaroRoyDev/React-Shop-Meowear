import { React } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartVisibility } from "../../redux/cart/cart.selectors";
import { toggleCartVisibility } from "../../redux/cart/cart.actions";

import { withRouter } from "react-router";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.style.scss";



const CartDropdown = ({ cartDropdownIsHidden, cartItems, history, dispatch }) => {

    return (

        cartDropdownIsHidden ? null :
            (<div className="cart-dropdown">
                <div className="cart-items">
                    {
                        cartItems.length ?
                            cartItems.slice().reverse().map(cartItem => (
                                <CartItem key={cartItem.id} item={cartItem}></CartItem>
                            ))
                            :
                            <span>You cart is empty :(</span>
                    }
                </div>

                <CustomButton onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartVisibility());
                }
                }>Go to checkout</CustomButton>
            </div>)

    )
}

const mapStateToProps = createStructuredSelector({
    cartDropdownIsHidden: selectCartVisibility,
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));