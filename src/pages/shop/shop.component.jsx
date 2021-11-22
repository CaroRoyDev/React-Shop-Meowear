import React from "react";
import { Route } from "react-router-dom";
import CategoriesOverview from "../../components/categories-overview/categories-overview.component";
import CategoryPage from "../category/category.component";
import { connect } from "react-redux";
import { updateCategories } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/wih-spinner.component";

import {
  firestore,
  convertCategoriesSnapshotToMap,
} from "../../firebase/firebase.utils";

const CategoriesOverviewWithSpinner = WithSpinner(CategoriesOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);
class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCategories } = this.props;

    const categoriesReference = firestore.collection("categories");

    this.unsubscribeFromSnapshot = categoriesReference.onSnapshot(
      async (snapshot) => {
        const categoriesMap = convertCategoriesSnapshotToMap(snapshot);
        updateCategories(categoriesMap);
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <h1>Shop</h1>

        <Route exact path={`${match.path}`}>
          <CategoriesOverviewWithSpinner isLoading={loading} {...this.props} />
        </Route>
        <Route path={`${match.path}/:categoryName`}>
          <CategoryPageWithSpinner isLoading={loading} {...this.props} />
        </Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCategories: (categoriesMap) =>
    dispatch(updateCategories(categoriesMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
