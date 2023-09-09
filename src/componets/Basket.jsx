import { Box, Button, Grid, Typography } from "@mui/material"
import BasketItem from "./BasketItem"


const Basket = ({basket, productData , total,resetBasket}) => {
  return (
        <>
    
    <Box sx={{backgroundColor:"#1B1B1B", color:"white", p:3, borderBottom:"2px solid red", fontSize:"24px"}} >
        {basket.map(item=>(
                <BasketItem key ={item.id}  item={item}  productData={productData.find(p => p.id === item.id)} />
        ))}
    </Box>
   
 
       <Box sx={{backgroundColor:"#1B1B1B", color:"white", p:3, textAlign:"right"}} >
        <Typography >
          Toplam : ${total}
        </Typography>
        <br />
       <Button sx={{backgroundColor:"red"}} variant="contained" onClick={resetBasket}>Reset</Button>
           </Box>
           
           
           </>
  )
}

export default Basket