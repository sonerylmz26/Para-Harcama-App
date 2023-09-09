import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const BasketItem = ({item, productData}) => {
  return (
        <>
      
    <Box sx={{ padding:"10px", borderRadius:"20px"}} >

      
         
   
  
      <Card  sx={{ maxWidth: 250,  }}>
      <CardMedia
        sx={{ height: 240, objectFit: "contain", padding:"10px" }}
        image={productData.image}
        title= {productData.title}
      />
      <CardContent>
      <Typography sx={{fontSize:"24px"}}>
         {productData.title} * {item.amount}
      </Typography>
      
      </CardContent>
     
    </Card>
    
    </Box>

  
      </>
  )
}

export default BasketItem