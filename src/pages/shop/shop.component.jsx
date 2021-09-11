import React from 'react';
import { Route } from 'react-router-dom';
import CategoriesOverview from '../../components/categories-overview/categories-overview.component';
import CategoryPage from '../category/category.component';

const ShopPage = ({match}) => {
    console.log(match);
    return (
        <div className="shop-page">
         <h1>Shop</h1>
         <Route exact path={`${match.path}`} component={CategoriesOverview} />
         <Route path={`${match.path}/:categoryName`} component={CategoryPage} />

        </div>
    )

}


export default ShopPage;