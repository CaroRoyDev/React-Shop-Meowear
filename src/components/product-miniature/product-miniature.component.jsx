import React from "react";
import "./product-miniature.styles.scss";

const ProductMiniature = ({ id, name, price, imageUrl }) => (
    <div className="product-miniature">
        <div
            className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}>
        </div>
        <div className="product-miniature-footer">
            <span className="name">{name}</span>
            <span className="price">{price} $</span>
        </div>
    </div>
)

export default ProductMiniature;