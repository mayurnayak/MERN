import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const OneProduct = (props) => {
    const [product, setProduct] = useState({})

    const navigate= useNavigate();

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

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
            .then((response) => {
                console.log(response.data)
                navigate('/')
            })
            .catch((err)=> {
                console.log(err)
            })
    }

    return (
        <div className='oneProduct'>
            <h2>Product: {product.title}</h2>
            <h2>Price: {product.price}</h2>
            <h2>Description: {product.description}</h2>
            <Link to={`/editProduct/${product._id}`}>Edit</Link>
            <br/>
            <button onClick={deleteHandler}>Delete</button>

        </div>
    );
}

export default OneProduct;
