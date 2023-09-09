
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function ProductCard({product, basket, setBasket, total, money, basketItem, addBasket, removeBasket}) {
  return (
        
        
        <Grid  item xs={6} md={4}>
       
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, objectFit: "contain", padding:"10px" }}
        image={product.image}
        title= {product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.price}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained"  disabled={!basketItem} onClick={removeBasket}>Sat</Button>
        <span className='amount'>{basketItem && basketItem.amount || 0}</span>
        <Button sx={{backgroundColor:"green",}} variant="contained" disabled={total +  product.price > money} onClick={addBasket}>Satın Al</Button>
      </CardActions>
    </Card>
    </Grid>
    
  );
}