import React from 'react'
import { useSelector } from 'react-redux'

function IcecreamView() {
    const noOfIcecreams = useSelector((state) => state.icecream.noOfIcecreams)
  return (
    <div>
      <h2>Number of Icecreams - {noOfIcecreams}</h2>
      <button>Order Icecream</button>
      <button>Restock Icecream</button>
    </div>
  )
}

export default IcecreamView
