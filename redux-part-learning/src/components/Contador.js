import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doDecrement, doDecrement5, doIncrement, doIncrement5, doReset } from '../actions/contadorActions';

const Contador = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  
  return (
    <>
      <h2>Contador App with Redux</h2>
      <p>Contador: {state.contador}</p>


      <button 
        className='button' 
        onClick={()=>dispatch(doDecrement5())}
        type="button"
      >-5
      </button>

      <button 
        className='button' 
        onClick={()=>dispatch(doDecrement())}
        type="button"
      >-1
      </button>

      <button 
        className='button' 
        onClick={()=>dispatch(doReset())}
        type="button"
      >reset
      </button>

      <button 
        className='button' 
        onClick={()=>dispatch(doIncrement())}
        type="button"
      >+1
      </button>

      <button 
        className='button' 
        onClick={()=>dispatch(doIncrement5())}
        type="button"
      >+5</button>



    </>
  )
}

export default Contador;