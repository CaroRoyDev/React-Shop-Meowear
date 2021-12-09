import { CartActionTypes } from "./cart.types";

export const toggleCartVisibility = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN_VISIBILITY,
});

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const decreaseItemQuantity = (item) => ({
  type: CartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
