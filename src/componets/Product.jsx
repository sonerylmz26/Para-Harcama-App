import React from 'react'

import { Button } from '@mui/material';
import ProductCard from './ProductCard';
const Product = ({product, basket, setBasket,total,money}) => {
  const basketItem = basket.find(item => item.id === product.id)

  const addBasket = () => {
// baskette ürün varmı yok mu bakmak için.
const checkBasket = basket.find(item => item.id === product.id)

if(checkBasket){
checkBasket.amount += 1
 setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
}else{
        setBasket([...basket, {
                id: product.id,
                amount:1
        }] )
}  

       }

       const removeBasket = () => {
        
    const currentBasket = basket.find(item => item.id === product.id)
const basketWithoutCurrent = basket.filter(item => item.id !== product.id)

        currentBasket.amount -= 1
        if(currentBasket.amount === 0){
        
         setBasket([...basketWithoutCurrent])
        }else{
                setBasket([...basketWithoutCurrent,currentBasket] )
        }  
       }
  
        return (
    <>

<ProductCard product={product} basketItem={basketItem} addBasket={addBasket} removeBasket={removeBasket}   />


 
  
    </>
  )
}

export default Product