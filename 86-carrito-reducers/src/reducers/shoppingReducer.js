import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = JSON.parse(localStorage.getItem('shopping-cart-jon')) || { products: [],cart: [],};
//ejm data
// {
//     products: [
//         {id: 1, name: 'Producto 1', price: 100,},
//     ],
//     cart: [
//         {id: 1, name: 'Producto 1', price: 100, cantidad: 5},
//     ],
// }

export const shoppingReducer = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            //jon lo hizo con ternario en lugar del if
            // https://www.youtube.com/watch?v=FVPCSYJdH-s&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=90
            let newCart = [];
            
            //buscando si el producto ya esta en el carrito
            const itemInCart = state.cart.find(productCart => (
                productCart.id === action.payload  
            )) || false ;

            if(itemInCart) {
                newCart = state.cart.map(product => (
                    product.id === itemInCart.id 
                        ? {...product, cantidad: product.cantidad + 1} 
                        : product
                ));
            }else {
                const newItem = state.products.find( 
                    product => product.id === action.payload
                );
                newCart = [...state.cart, {...newItem, cantidad: 1,}];
            }

            return {
                ...state,
                cart:[...newCart],
            }
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            const itemInCart = state.cart.find( product => product.id === action.payload);
            let newCart = [];
            if(itemInCart.cantidad === 1){
                newCart = state.cart.filter(product => product.id !== itemInCart.id);
            } else {
                newCart = state.cart.map( product => (
                    product.id === itemInCart.id 
                        ? {...itemInCart, cantidad: itemInCart.cantidad-1} 
                        : product
                ));
            }
            return {
                ...state,
                cart: [...newCart],
            }
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            const newCart = state.cart.filter( product => product.id !== action.payload);
            return {
                ...state,
                cart: [...newCart],
            }
        }
        case TYPES.CLEAR_CART:{
            return {
                ...state,
                cart: []
            }
        }
        default:
            return state;
    }
}