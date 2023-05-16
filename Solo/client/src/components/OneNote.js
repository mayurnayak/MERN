import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const OneNote = (props) => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [oneNote, setOneNote] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneNote/${id}`)
            .then((res) => {
                console.log(res)
                setOneNote(res.data)
            })
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteNote/${id}`)
            .then((response) => {
                console.log(response.data)
                navigate('/profile')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="container my-3">
            <h1>Details</h1>
            <div className="card my-3">
                <div className="card-header">
                    <h2>{oneNote.title}</h2>
                </div>
                <div className="card-body">
                    <h2 className="card-text">{oneNote.description}</h2>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
                    <Link to={`/editNote/${oneNote._id}`} className="btn btn-primary mr-2 mx-3">Edit</Link>
                </div>
            </div>
        </div>
    );
}

export default OneNote;
