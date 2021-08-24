import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";
import "./product-miniature.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const ProductMiniature = ({ item, addItemToCart }) => {
    const {name, price, imageUrl} = item;
    return(
    <div className="product-miniature">
        <div
            className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}>
        </div>
        <div className="product-miniature-footer">
            <span className="name">{name}</span>
            <span className="price">{price} $</span>
        </div>
        <CustomButton inverted additionnalClasses="add-to-cart" onClick={()=>addItemToCart(item)} >Add to cart</CustomButton>
    </div>
)
    }
const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
})
export default connect(null, mapDispatchToProps)(ProductMiniature);