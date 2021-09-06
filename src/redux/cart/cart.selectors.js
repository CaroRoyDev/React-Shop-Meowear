import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartVisibility = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (cartItemsQuantity, currentCartItem) =>
        cartItemsQuantity + currentCartItem.quantity,
      0
    )
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (cartItemsPrice, currentCartItem) =>
        cartItemsPrice + currentCartItem.quantity * currentCartItem.price,
        0
    )
);
