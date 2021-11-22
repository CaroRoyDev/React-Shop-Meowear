import ShopActionsTypes from "./shop.types";

export const updateCategories = (categoriesMap) => ({
    type: ShopActionsTypes.UPDATE_COLLECTIONS,
    payload: categoriesMap,
});