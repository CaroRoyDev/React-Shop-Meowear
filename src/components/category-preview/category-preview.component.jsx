import React from "react";
import './category-preview.styles.scss';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import ProductMiniature from "../product-miniature/product-miniature.component";

const CategoryPreview = ({ title, items, routeName, match }) => (
    <div className="category-preview">
        <h1>{title}</h1>
        <span><Link to={`${match.path}/${routeName}`}>View all &rsaquo; </Link></span>
        {console.log()}
        <div className="preview">
            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                   <ProductMiniature key={item.id} item={item}></ProductMiniature>
                ))}
        </div>
    </div>
)

export default withRouter(CategoryPreview);