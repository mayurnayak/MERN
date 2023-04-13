import React from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const EditProduct = (props) => {
    const navigate = useNavigate();
    const {id} = useParams()
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: ''
    })

    const [error, setError] = useState({})

    const changeHandler = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

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


    const submitHandler = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/updateProduct/${id}`, product)
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.errors)
                setError(err.response.data.errors)
            })
    }

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={submitHandler}>
                <div className='userInput'>
                    <label>Title: </label>
                    <input type="text" name="title" onChange={changeHandler} value={product.title} />
                    {
                        error.title ?
                            <p>{error.title.message}</p> :
                            null
                    }
                </div>
                <div className='userInput'>
                    <label>Price: </label>
                    <input type="number" name="price" onChange={changeHandler} value={product.price} />
                    {
                        error.price ?
                            <p>{error.price.message}</p> :
                            null
                    }
                </div>
                <div className='userInput'>
                    <label>Description: </label>
                    <input type="text" name="description" onChange={changeHandler} value={product.description} />
                    {
                        error.description ?
                            <p>{error.description.message}</p> :
                            null
                    }
                </div>
                <button>Edit</button>
            </form>
        </div>
    );
}

export default EditProduct;
