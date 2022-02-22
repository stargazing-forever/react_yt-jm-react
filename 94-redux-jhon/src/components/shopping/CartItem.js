import React from 'react'

const CartItem = ({data, delFromCart, delAllFromCart}) => {
    const {id, name, price, cantidad} = data;
  return (
    <div style={{border: 'thin solid gray', padding: '1rem'}}>
      <h4>{name}  </h4>
      <h5>${price}.00 x {cantidad} = ${price*cantidad}.00</h5>
      <button type='button' onClick={()=>delFromCart(id)} >Eliminar Uno</button>
      <button type='button' onClick={()=>delAllFromCart(id)}>Eliminar Todos</button>
    </div>
  )
}

export default CartItem
