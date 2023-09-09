import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Header from "./componets/Header";
import { productData } from "./helper/productData";
import Product from "./componets/Product";
import Basket from "./componets/Basket";
import { Grid } from "@mui/material";
function App() {
  const [money , setMoney ] = useState(1000000)
const [basket , setBasket ] = useState([])
const [total , setTotal ] = useState(0)
const resetBasket = () => {
  setBasket([])
}
useEffect(() => {
 

setTotal(
  basket.reduce((acc,item) => {
return acc + (item.amount * (productData.find(product => product.id === item.id).price))
  }, 0)
)
  
}, [basket])


  return (
    <div className="App">
     <Header total={total} money={money} />
     <Grid sx={{backgroundColor:"#dede", padding:"20px",}}  container spacing={1}>
     {
      productData.map((product)=> (
        
        <Product key={product.id}  basket={basket} setBasket={setBasket} product ={product} total={total}  money={money}/>
    
       ))
     }
     </Grid>
    {
      total > 0 && (
        <Basket resetBasket={resetBasket} productData={productData}  basket={basket} total={total} />
      )
    }
     
    </div>
  );
}

export default App;
