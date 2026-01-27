import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const products = [
        {id:1,name:'LAPTOP',price:45000},
        {id:2,name:'MOBILE',price:25000},
        {id:3,name:'TABLET',price:15000},
        {id:4,name:'WATCH',price:5000},
        {id:5,name:'TV',price:35000},
        {id:6,name:'SPEAKER',price:8000},
        {id:7,name:'HEADPHONE',price:6000},
        {id:8,name:'CAMERA',price:40000},
    ]
  return (
    <> 
    <h1>Products</h1>
    {products.map((items)=>(
        <div
            key={items.id}>
                <h5>{items.name}</h5>
                <h4>{items.price}</h4>
                <Link to ={`/products/${items.id}`}>View Details</Link>
        </div>
    )
    )}
    </>

  )
}

export default Products