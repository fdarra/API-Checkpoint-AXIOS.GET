import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Product = ({product}) => {
  return (
    
    <div className='' style={{display:'flex',margin:'1rem' ,flexWrap:'wrap',alignItems:'center', justifyContent:"space-between"}}>
   <div style={{width:2/6}}>
    <Card style={{ width: '18rem'  }}>
    <Card.Img variant="top" src={product.image} style={{width:'16rem'}} />
    <Card.Body>
      <Card.Title><h2>{product.title}</h2></Card.Title>
      <Card.Text>
      <h3>Price :{product.price}</h3>
     </Card.Text>
      <Card.Text>
      <h3>category : {product.category}</h3>
      </Card.Text>
      <Card.Text>
      <label>category :</label>
      <p>{product.category}</p> 
      </Card.Text>

      <Button variant="primary">Add To Cart</Button>
    </Card.Body>
  </Card>
  </div>
  </div>
  )
}
// id:30,
// title:'...',
// price:'...',
// category:'...',
// description:'...',
// image:'...
export default Product