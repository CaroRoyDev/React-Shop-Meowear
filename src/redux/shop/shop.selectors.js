import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCategories = createSelector(
    [selectShop],
    (shop) => shop.categories
)