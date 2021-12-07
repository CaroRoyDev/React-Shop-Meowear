import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCategoriesIsFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/wih-spinner.component";
import CategoryPage from "./category.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectCategoriesIsFetching
})

const CategoryPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CategoryPage)

export default CategoryPageContainer;