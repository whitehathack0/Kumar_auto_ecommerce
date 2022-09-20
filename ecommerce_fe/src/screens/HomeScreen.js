import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'



function HomeScreen() {
  const [products, setProducts] = useState([]) 

  useEffect(() => {

    async function fetch_products() {
      const { data } = await axios.get('/api/products/')
      setProducts(data)
    }

    fetch_products()

  }, [])
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} el={3}>
                <Product product={product} />
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen