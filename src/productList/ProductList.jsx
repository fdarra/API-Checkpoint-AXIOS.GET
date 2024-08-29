import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from '../product/Product';


const ProductList = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
    .get('https://fakestoreapi.com/products/')
      .then((res) => setProducts(res.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

    return (
    <div>
       {products.map((el,key)=> <Product product={el} key={key}/>)}


    </div>
  )
}

export default ProductList