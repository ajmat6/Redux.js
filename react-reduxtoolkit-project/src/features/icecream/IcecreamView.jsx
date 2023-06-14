import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice';

function IcecreamView() {
    const noOfIcecreams = useSelector((state) => state.icecream.noOfIcecreams)
    const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Icecreams - {noOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <button onClick={() => dispatch(restocked(10))}>Restock Icecream</button>
    </div>
  )
}

export default IcecreamView
