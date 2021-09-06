import React from "react";
import "./checkout.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotalPrice } from "../../redux/cart/cart.selectors";

import  CheckoutItem  from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, cartTotalPrice }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">Product</div>
                <div className="header-block">Description</div>
                <div className="header-block">Quantity</div>
                <div className="header-block">Price</div>
                <div className="header-block">Remove</div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
            }
            <div className="total">{cartTotalPrice}</div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotalPrice: selectCartTotalPrice,
})

export default connect(mapStateToProps, null)(CheckoutPage);