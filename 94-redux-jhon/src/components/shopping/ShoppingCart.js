import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doAddToCart, doClearCart, doRemoveAllFromCart, doRemoveOneFromCart } from '../../actions/shoppingActions';
import CartItem from './CartItem';
import ProductItem from './ProductItem';

const ShoppingCart = () => {

  //hooks
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const {products, cart} = state.shopping;

  useEffect(() => {
    localStorage.setItem('shopping-cart-jon', JSON.stringify(state.shopping));
  }, [state.shopping]);

  //funciones
  const addToCart = (id) => {
    dispatch(doAddToCart(id));
  }
  const delFromCart = (id) => {
    dispatch(doRemoveOneFromCart(id));
    console.log(id)
  }
  const delAllFromCart = (id) => {
    dispatch(doRemoveAllFromCart(id))
  }
  const clearCart = () => {
    dispatch(doClearCart());
  }

  return (
    <div>
      <h2>Shoping Cart</h2>

      <h3>Productos</h3>
      <article className="box grid-responsive">
        {
          products.map(product => (
            <ProductItem key={product.id} data={product} addToCart={addToCart} />
          ))
        }
      </article>
      <h3>Carrito</h3>
      <button type='button' onClick={clearCart}>Limpiar Carrito</button>
      <article className="box grid-responsive">
        {
          cart.map((product, index) => (
            <CartItem key={index} data={product} delFromCart={delFromCart} delAllFromCart={delAllFromCart} />
          ) )
        }
      </article>

    </div>
  )
}

export default ShoppingCart
