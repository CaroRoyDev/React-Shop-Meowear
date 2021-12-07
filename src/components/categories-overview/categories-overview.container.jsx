import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCategoriesIsFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from '../with-spinner/wih-spinner.component';
import CategoriesOverview from "./categories-overview.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectCategoriesIsFetching
})

const CategoriesOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CategoriesOverview);

export default CategoriesOverviewContainer;