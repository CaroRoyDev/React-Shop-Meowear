import React from "react";
import "./category.styles.scss";

import { connect } from "react-redux";
import { selectCategory } from "../../redux/shop/shop.selectors";
import { withRouter } from "react-router";

import ProductMiniature from "../../components/product-miniature/product-miniature.component";


const CategoryPage = ({category}) => {
  const { title, items } = category;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className={`category ${title.toLowerCase()}`}>
      <h2>{title}</h2>
      <div className="products-list">
        {items.map((item) => (
          <ProductMiniature key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryName)(state),
});

export default withRouter(connect(mapStateToProps)(CategoryPage));