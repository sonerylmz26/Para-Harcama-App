import BasketItem from "./BasketItem"


const Basket = ({basket, productData , total,resetBasket}) => {
  return (
        <>
      
    <div>
        {basket.map(item=>(
                <BasketItem key ={item.id}  item={item}  productData={productData.find(p => p.id === item.id)} />
        ))}
    </div>
       <div>
       Toplam : ${total}
           </div>
           <button onClick={resetBasket}>Reset</button>

           </>
  )
}

export default Basket