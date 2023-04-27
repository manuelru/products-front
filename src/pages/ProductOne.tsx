import { Button, Card, CardActions, CardContent, ImageListItem, Link, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ProductDetail = () => {
  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";
  const { id } = useParams();

  const [product, setProduct] = useState({});
 
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }  
    };

    getProduct();
  }, [id]);

 
  //console.log(product.name);
  // console.log({id});
  
  const productsStyle = {
    color: 'white',
    padding: '5px',
    display: 'flex',
    marginTop: '90px',
    flexWrap: 'wrap'
  };
  const titleProduct = {
    width: '100%',
    textAlign: 'center',
    marginTop: '20px',
  };
  const productItemStyle = {
    width: '24%',
    color: 'black',
    margin: 'auto',
    
  };


  return (
    <div style={productsStyle}>
      <h1 style={titleProduct}>Productos</h1>
        <div key={product.id} style={productItemStyle}>
   
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
        <Link to={`/products/${product.id}`}><Button>Buy Now</Button></Link>
      </CardActions>
    </Card>
        </div>
        
      
    </div>
  );
};

export default ProductDetail;

// export const ProductOne = () => {
//   const [products, setProducts] = useState([]);


//   const API_URL = "http://localhost:3000";
//   const PRODUCT_ENDPOINT = "products";
//   const postSlug= useParams(); 

//   const getProducts = async () => {
//     const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
//     const data = await response.json();
//     setProducts(data);

  
//   };

//    useEffect(() => {
//      getProducts();
//    }, [postSlug]);
  
//   return (
//     <div>
//       <h1>Productos</h1>
//     </div>
//   )
// }