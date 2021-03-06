import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionsTypes from "./shop.types";
import { fetchCategoriesSuccess, fetchCategoriesFailure } from "./shop.actions";
import {
  firestore,
  convertCategoriesSnapshotToMap,
} from "../../firebase/firebase.utils";

export function* fetchCategoriesAsync() {
  try {
    const categoriesReference = firestore.collection("categories");
    const snapshot = yield categoriesReference.get();
    const categoriesMap = yield call(convertCategoriesSnapshotToMap, snapshot);
    yield put(fetchCategoriesSuccess(categoriesMap));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}
export function* fetchCategoriesStart() {
  yield takeLatest(
    ShopActionsTypes.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export default function* shopSagas() {
  yield all([call(fetchCategoriesStart)]);
}
