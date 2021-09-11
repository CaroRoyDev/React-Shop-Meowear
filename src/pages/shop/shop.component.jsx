import React from 'react';
import { connect } from 'react-redux';
import { selectShopCategories } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';


import CategoryPreview from '../../components/category-preview/category-preview.component';
const ShopPage = ({productCategories}) => {
    
    return (
        <div>
            <h1>Shop</h1>
            {productCategories.map(({ id, ...categoryProps }) => (
                <CategoryPreview key={id} {...categoryProps}></CategoryPreview>
            ))}
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    productCategories: selectShopCategories,
})
export default connect(mapStateToProps)(ShopPage);