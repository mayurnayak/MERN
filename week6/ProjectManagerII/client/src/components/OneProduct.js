import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';

const OneProduct = (props) => {
    const [product, setProduct] = useState({})

    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((response) => {
                console.log(response.data)
                setProduct(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className='oneProduct'>
            <h2>Product: {product.title}</h2>
            <h2>Price: {product.price}</h2>
            <h2>Description: {product.description}</h2>
        </div>
    );
}

export default OneProduct;
