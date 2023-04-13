import React from 'react';
import axios from 'axios'
import {useEffect } from 'react'
import './Display.css'
import { Link } from 'react-router-dom';

const Display = (props) => {
    const { productList,setProductList} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
            .then((response) => {
                console.log(response)
                setProductList(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteHandler = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
            .then((res) => {
                const updatedProductList = productList.filter((product) => product._id !== id)
                setProductList(updatedProductList)
            })
            .catch((err)=> {
                console.log(err)
            })
    }

    return (
        <div>
            <h2>All Products</h2>
            {
                productList.map((product) => (
                    <div key={product._id} className='displaydetails'>
                        {/* <h2>Product: {product.title}</h2>
                        <h2>Price: {product.price}</h2>
                        <h2>Description: {product.description}</h2> */}
                        <Link to={`/viewProduct/${product._id}`}>{product.title}</Link>
                        <button onClick={()=> deleteHandler(product._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
} 

export default Display;
