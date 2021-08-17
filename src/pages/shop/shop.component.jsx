import React from 'react';
import SHOP_DATA from './shop.data';

import CategoryPreview from '../../components/category-preview/category-preview.component';
class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productCategories: SHOP_DATA
        }
    }

    render() {
        const { productCategories } = this.state;
        return (
            <div>
                <h1>Shop</h1>
                {productCategories.map(({ id, ...categoryProps }) => (
                    <CategoryPreview key={id} {...categoryProps}></CategoryPreview>
                ))}
            </div>
        )
    }
}

export default ShopPage;