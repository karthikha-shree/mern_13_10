import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ProductDeltails = () => {
    //  const products = [
    //     {id:1,name:'LAPTOP',price:45000,description:"A high-performance laptop suitable for all your computing needs."},
    //     {id:2,name:'MOBILE',price:25000,description:"A sleek smartphone with the latest features and a stunning display."},
    //     {id:3,name:'TABLET',price:15000,description:"A versatile tablet perfect for work and entertainment on the go."},
    //     {id:4,name:'WATCH',price:5000,description:"A stylish watch with multiple features and a long-lasting battery."},
    //     {id:5,name:'TV',price:35000,description:"A large-screen TV with excellent picture quality and smart features."},
    //     {id:6,name:'SPEAKER',price:8000,description:"A portable speaker with high-quality sound and Bluetooth connectivity."},
    //     {id:7,name:'HEADPHONE',price:6000,description:"Comfortable headphones with noise-cancellation and clear audio."},
    //     {id:8,name:'CAMERA',price:40000,description:"A professional-grade camera for capturing stunning photos and videos."},
    // ]

    const [product, setproduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setproduct(data));
    }, []);



    return (

        <div>
            <h1>Product Details</h1>
            <h2>{"Product name : "}{product.title} </h2>
            <img src={product.image} alt={product.title} width="200" height="200"/>
            <h3>{"Product price : "}₹{product.price}</h3>
            <h3>{"Product category : "}{product.category}</h3>
            <h3>{"Product Rating : "}{product.rating?.rate}</h3>
            <h4>{"Product description : "}{product.description}</h4>

        </div>

    )

}
export default ProductDeltails


