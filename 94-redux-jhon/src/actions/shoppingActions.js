import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types";

export const doAddToCart = (id) => ({
    type: ADD_TO_CART,
    payload: id,
});    

export const doRemoveOneFromCart = (id) => ({
    type: REMOVE_ONE_FROM_CART,
    payload: id,
});

export const doRemoveAllFromCart = (id) => ({
    type: REMOVE_ALL_FROM_CART,
    payload: id,
});

export const doClearCart = () => ({
    type: CLEAR_CART,
});