import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCategories = createSelector(
  [selectShop],
  (shop) => shop.categories
);

export const selectCategory = (categoryUrlParam) =>
  createSelector([selectShopCategories], (categories) => 
    categories.find((category) => categoryUrlParam === category.routeName)
  );
