import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";


import { decreaseItemQuantity, removeItemFromCart, addItemToCart } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, removeItemFromCart, decreaseItemQuantity, addItemToCart }) => {
    const { name, quantity, price, imageUrl} = cartItem;
    return (
        
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div className="arrow" onClick={() => decreaseItemQuantity(cartItem)}>&#x276E;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItemToCart(cartItem)}>&#x276F;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => removeItemFromCart(cartItem)}>&#x2716;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    decreaseItemQuantity: item => dispatch(decreaseItemQuantity(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),    
    addItemToCart: item => dispatch(addItemToCart(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);