import React from "react";
import './category-preview.styles.scss';

import ProductMiniature from "../product-miniature/product-miniature.component";

const CategoryPreview = ({ title, items }) => (
    <div className="category-preview">
        <h1>{title}</h1>
        <div className="preview">
            {items
                .filter((item, index) => index < 4)
                .map(({ id, ...itemProps }) => (
                   <ProductMiniature key={id} {...itemProps}></ProductMiniature>
                ))}
        </div>
    </div>
)

export default CategoryPreview;