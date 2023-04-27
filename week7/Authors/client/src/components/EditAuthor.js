import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const EditAuthor = () => {
    const { id } = useParams()
    const [authorName, setAuthorName] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAuthor/${id}`)
            .then((res) => {
                console.log(res.data)
                setAuthorName(res.data.name);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/updateAuthor/${id}`, {name: authorName})
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <form onSubmit={submitHandler}>
            
            <Link to="/">Home</Link>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                />
                {errors.name ? <p>{errors.name.message}</p> : null}
            </div>
            <button type="submit" className="btn btn-primary">
                SUBMIT
            </button>
        </form>
    );
};

export default EditAuthor;
