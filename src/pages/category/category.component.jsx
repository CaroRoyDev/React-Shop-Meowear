import React from "react";
import "./category.styles.scss";

import { connect } from "react-redux";
import { selectCategory } from "../../redux/shop/shop.selectors";

import ProductMiniature from "../../components/product-miniature/product-miniature.component";

const CategoryPage = ({category}) => {
    const {title, items} = category;
    return (
        <div className={`category ${title.toLowerCase()}`}>
            <h2>{title}</h2>
            <div className="products-list">
            {
                items.map((item)=> <ProductMiniature key={item.id} item={item}/>)
            }
            </div>
        </div>

    )
}

const mapStateToProps = (state, ownProps) => ({
    category: selectCategory(ownProps.match.params.categoryName)(state)
})

export default connect(mapStateToProps)(CategoryPage);