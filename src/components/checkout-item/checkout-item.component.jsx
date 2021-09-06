import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import { removeItemFromCart } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, removeItemFromCart }) => {
    const { name, quantity, price, imageUrl} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={()=> removeItemFromCart(cartItem)}>&#x2716;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: item => dispatch(removeItemFromCart(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);