import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    console.log("IN action");
    switch (action.type){
        
        case CartActionTypes.TOGGLE_CART_DROPDOWN_VISIBILITY :
            return{
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM_TO_CART : 
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;