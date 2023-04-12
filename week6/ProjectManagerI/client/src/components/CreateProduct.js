import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import './CreateProduct.css'

const CreateProduct = (props) => {
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: ''
    })

    const [error, setError] = useState({})

    const changeHandler = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/newProduct', product)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response.data.errors)
                setError(err.response.data.errors)
            })

        setProduct({
            title: '',
            price: 0,
            description: ''
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='userInput'>
                    <label>Title: </label>
                    <input type="text" name="title" onChange={changeHandler} value={product.title}/>
                    {
                        error.title?
                        <p>{error.title.message}</p>:
                        null
                    }
                </div>
                <div className='userInput'>
                    <label>Price: </label>
                    <input type="number" name="price" onChange={changeHandler} value={product.price}/>
                    {
                        error.price?
                        <p>{error.price.message}</p>:
                        null
                    }
                </div>
                <div className='userInput'>
                    <label>Description: </label>
                    <input type="text" name="description" onChange={changeHandler} value={product.description}/>
                    {
                        error.description?
                        <p>{error.description.message}</p>:
                        null
                    }
                </div>
                <button>Create</button>
            </form>
        </div>
    );
}

export default CreateProduct;
