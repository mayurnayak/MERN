import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EditNote = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [notes, setNotes] = useState({
        title: '',
        description: ''
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setNotes({...notes, [e.target.name]:e.target.value})
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneNote/${id}`)
            .then((res) => {
                console.log(res)
                setNotes(res.data)
            })
    }, [])


    const submitHandler = (e) => {
        e.preventDefault()
        
        axios.put(`http://localhost:8000/api/editNote/${id}`, notes)
            .then((res) => {
                console.log(res.data)
                navigate('/profile')
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div>
            <h1>Edit Note</h1>
            <form className='container' onSubmit={submitHandler}>
                <div className="form-group my-3">
                    <label>Title</label>
                    <input type="text" name="title" className="form-control" placeholder="Title" onChange={changeHandler} value={notes.title}/>
                    {
                    errors.title ?
                        <p className='text-danger'>{errors.title.message}</p> :
                        null
                }
                </div>
                <div className="form-group my-3">
                    <label>Description</label>
                    <textarea name="description" className="form-control" placeholder="description" rows="3" onChange={changeHandler} value={notes.description}></textarea>
                    {
                    errors.description ?
                        <p className='text-danger'>{errors.description.message}</p> :
                        null
                }
                </div>
                <button type="submit" className="btn btn-primary my-3">Edit Note</button>
                <Link to={`/profile`} className="btn btn-primary mr-2 mx-3">Back to Profile</Link>
            </form>
        </div>
    );
}

export default EditNote;
