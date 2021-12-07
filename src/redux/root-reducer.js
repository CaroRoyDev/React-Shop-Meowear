import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import createFilter from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import menuReducer from "./menu/menu.reducer";
import shopReducer from "./shop/shop.reducer";

const saveSubsetFilter = createFilter("cart", ["cartItems"]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
  transforms: [saveSubsetFilter],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  menu: menuReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
