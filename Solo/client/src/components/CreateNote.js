import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CreateNote = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useState({
        title: '',
        description: ''
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setNotes({...notes, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        axios.post('http://localhost:8000/api/newNote', notes, {withCredentials:true})
            .then((res) => {
                console.log(res.data)
                navigate('/profile')
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })

        // axios.get('http://localhost:8000/api/allNotes')
        //     .then((res) => {
        //         const title = res.data.map(notes => notes.title)
        //         if (title.includes(notes.title)) {
        //             setErrors({ title: { message: 'This note is already added' } })
        //         } else {
        //             axios.post('http://localhost:8000/api/newNote', notes, {withCredentials:true})
        //                 .then((res) => {
        //                     console.log(res)
        //                     navigate('/')
        //                 })
        //                 .catch((err) => {
        //                     console.log(err)
        //                     setErrors(err.response.data.errors)
        //                 })
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }

    return (
        <div>
            <h1 className='my-4'>Add Note to your Todo List</h1>
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
                <button onClick={submitHandler} type="submit" className="btn btn-primary my-3">Add Note</button>
                <Link to={`/profile`} className="btn btn-primary mr-2 mx-3">Back to Profile</Link>
            </form>
        </div>
    );
}

export default CreateNote;
