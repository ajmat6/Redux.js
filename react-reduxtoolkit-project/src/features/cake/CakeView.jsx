import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux' // importing useSelector to access any state in redux store
import { ordered, restocked } from './cakeSlice' // importing actions

function CakeView() {
    const [value, setvalue] = useState(1)
    const noOfCakes = useSelector((state) => state.cake.noOfCakes) // useSelector accepts redux state as an argument and it returns a value(here is cake reducer's noOfCakes value from redux store state)
    const dispatch = useDispatch(); // to use useDispatch storing it in a variable
  return (
    <div>
      <h2>Number of Cakes - {noOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      {/* Passing 5 as a payload in the restocked action */}
      <input type="number" value={value} onChange={(e) => setvalue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(value))}>Restock Cake</button> 
    </div>
  )
}

export default CakeView
