import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAuthor = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [errors, setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/newAuthor', {name})
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
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Link to={'/'}>Home</Link>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} name='Name' />
                            {errors.name ? <p>{errors.name.message}</p> : null}
                        </div>
                        <button className="btn btn-primary">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAuthor;
