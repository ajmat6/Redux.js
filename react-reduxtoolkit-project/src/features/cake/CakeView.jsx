import React from 'react'
import { useSelector } from 'react-redux' // importing useSelector to access any state in redux store

function CakeView() {
    const noOfCakes = useSelector((state) => state.cake.noOfCakes) // useSelector accepts redux state as an argument and it returns a value(here is cake reducer's noOfCakes value from redux store state)
  return (
    <div>
      <h2>Number of Cakes - {noOfCakes}</h2>
      <button>Order Cake</button>
      <button>Restock Cake</button>
    </div>
  )
}

export default CakeView
