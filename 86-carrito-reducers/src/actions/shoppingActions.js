export const TYPES = {
    ADD_TO_CART: 'ADD_PRODUCT_TO_CART',
    REMOVE_ONE_FROM_CART: 'REMOVE_PRODUCT_FROM_CART',
    REMOVE_ALL_FROM_CART: 'REMOVE_ALL_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
}

export const doAddToCart = (id) => ({
    type: TYPES.ADD_TO_CART,
    payload: id,
});    

export const doRemoveOneFromCart = (id) => ({
    type: TYPES.REMOVE_ONE_FROM_CART,
    payload: id,
});

export const doRemoveAllFromCart = (id) => ({
    type: TYPES.REMOVE_ALL_FROM_CART,
    payload: id,
});

export const doClearCart = () => ({
    type: TYPES.CLEAR_CART,
});

