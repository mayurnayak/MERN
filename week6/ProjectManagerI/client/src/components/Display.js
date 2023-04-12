import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'

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

    return (
        <div>
            <h2>All Products</h2>
            {
                productList.map((product) => (
                    <div key={product._id}>
                        <h2>Product: {product.title}</h2>
                        <h2>Price: {product.price}</h2>
                        <h2>Description: {product.description}</h2>
                    </div>
                ))
            }
        </div>
    );
} 

export default Display;
