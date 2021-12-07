import ShopActionsTypes from "./shop.types";

import {
  firestore,
  convertCategoriesSnapshotToMap,
} from "../../firebase/firebase.utils";

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

export const fetchCategoriesStartAsync = () => {
  return (dispatch) => {
    const categoriesReference = firestore.collection("categories");

    dispatch(fetchCategoriesStart());

    categoriesReference
      .get()
      .then((snapshot) => {
        const categoriesMap = convertCategoriesSnapshotToMap(snapshot);
        dispatch(fetchCategoriesSuccess(categoriesMap));
      })
      .catch((error) => dispatch(fetchCategoriesFailure(error.message)));
  };
};
