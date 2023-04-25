import { Button, Card, CardActions, CardContent, ImageListItem, Link, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductOne = () => {
  const [products, setProducts] = useState([]);
  const { postSlug } = useParams();

  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}/${postSlug}`);
    const data = await response.json();
    setProducts(data);

  
  };

  useEffect(() => {
    getProducts();
  }, [postSlug]);
  
  const productStyle = {
    color: 'white',
    padding: '5px',
    display: 'flex',
    marginTop: '90px',
    flexWrap: 'wrap',
    marginButton: '20px'
  };
  const titleProducts = {
    width: '100%',
    textAlign: 'center'
  };
  const productsItemStyle = {
    width: '24%',
    margin: 'auto',
    
  };
  
  return (
    <div style={productStyle}>
      <h1 style={titleProducts}>Productos</h1>
      {products.map((product: any) => (
        <div key={product.id} style={productsItemStyle}>
   
      <Card sx={{ maxWidth: 345 }} key={product.id}>
      
      <CardContent >
        <ImageListItem key={product.img}>
          <img
            src={`${product.image}`}
            srcSet={`${product.image}`}
            alt={product.name}
            loading="lazy"
          />
        </ImageListItem>
        <Typography gutterBottom variant="h5" component="div">
        {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.description}
     
        </Typography>
        <Typography variant="h2" color="text.secondary"> $ {product.price} </Typography>
        <Typography component="legend">Controlled</Typography>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        
      </CardContent>
      <CardActions>

      <Link to="about"><Button>Buy Now</Button></Link>
        
      </CardActions>
    </Card>
        </div>
        
      ))}
    </div>
  )
}