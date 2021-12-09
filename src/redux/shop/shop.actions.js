import ShopActionsTypes from "./shop.types";

export const fetchCategoriesStart = () => ({
  type: ShopActionsTypes.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categoriesMap) => ({
  type: ShopActionsTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesMap,
});

export const fetchCategoriesFailure = (errorMessage) => ({
  type: ShopActionsTypes.FETCH_CATEGORIES_FAILURE,
  payload: errorMessage,
});
