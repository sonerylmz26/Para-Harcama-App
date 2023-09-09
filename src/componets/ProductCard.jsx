import { moneyFormat } from "../helper/moneyFormat"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';

export default function ProductCard({product, basket, setBasket, total, money, basketItem, addBasket, removeBasket}) {
  return (
        
       
       
        <Grid sx={{ display:"flex",justifyContent:"center", m:"auto"}}  item xs={12} sm={6} md={4} lg={3} >
        <Container>
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 240, objectFit: "contain", padding:"10px" }}
        image={product.image}
        title= {product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        $  {moneyFormat(product.price)}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained"  disabled={!basketItem} onClick={removeBasket}>Sat</Button>
        <span className='amount'>{basketItem && basketItem.amount || 0}</span>
        <Button sx={{backgroundColor:"green",}} variant="contained" disabled={total +  product.price > money} onClick={addBasket}>Satın Al</Button>
      </CardActions>
    </Card>
    </Container>
    </Grid>
       
   
    
  );
}