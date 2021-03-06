import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectShopCategories = createSelector(
  [selectShop],
  (shop) => shop.categories
);

export const selectCategoriesAsArray = createSelector(
  [selectShopCategories],
  (categories) => categories ? Object.values(categories) : []
)

export const selectCategory = memoize(
  (categoryUrlParam) =>
  createSelector([selectShopCategories], (categories) => 
    categories ? categories[categoryUrlParam] : null
  )
);

export const selectCategoriesIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
)
