import React from "react";

import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCategoriesStartAsync } from "../../redux/shop/shop.actions";


import CategoryPageContainer from "../category/category.container";
import CategoriesOverviewContainer from "../../components/categories-overview/categories-overview.container";

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <h1>Shop</h1>

        <Route exact path={`${match.path}`}>
          <CategoriesOverviewContainer />
        </Route>
        <Route path={`${match.path}/:categoryName`}>
          <CategoryPageContainer />
        </Route>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategoriesStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
