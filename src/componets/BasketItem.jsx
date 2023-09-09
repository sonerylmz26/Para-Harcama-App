import React from 'react'

const BasketItem = ({item, productData}) => {
  return (
        <>
      
    <div>
        {productData.title} * {item.amount}
    </div>
 
      </>
  )
}

export default BasketItem