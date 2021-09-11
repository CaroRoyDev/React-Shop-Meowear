import React from "react";
import "./categories-overiew.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCategories } from '../../redux/shop/shop.selectors';



import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesOverview = ({productCategories}) => {

    return (
        <div className="categories-overview">
           
            {productCategories.map(({ id, ...categoryProps }) => (
                <CategoryPreview key={id} {...categoryProps}></CategoryPreview>
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    productCategories: selectShopCategories,
})

export default connect(mapStateToProps)(CategoriesOverview);

