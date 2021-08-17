import React from "react";
import './category-preview.styles.scss';

import CategoryItem from "../category-item/category-item.component";

const CategoryPreview = ({ title, items }) => (
    <div className="category-preview">
        <h1>{title}</h1>
        <div className="preview">
            {items
                .filter((item, index) => index < 4)
                .map(({ id, ...itemProps }) => (
                   <CategoryItem key={id} {...itemProps}></CategoryItem>
                ))}
        </div>
    </div>
)

export default CategoryPreview;