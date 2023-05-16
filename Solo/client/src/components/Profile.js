// import axios from 'axios';
// import React, {useState, useEffect} from 'react';

// const Profile = (props) => {
//     useEffect(() => {
//         axios.get('http://localhost:8000/api/myNotes', {withCredentials:true})
//             .then((res) => {
//                 console.log(res);
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }, [])
//     return (
//         <div>
//             <h2>Profile</h2>
//         </div>
// )}

// export default Profile;

import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
    const navigate = useNavigate()

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/myNotes', { withCredentials: true })
            .then((res) => {
                console.log(res)
                // setNotes(res.data)
                const sortedNotes = res.data.sort((a, b) => a.title.localeCompare(b.title));
                setNotes(sortedNotes);
            })
            .catch((err) => (
                console.log(err)
            ))
    }, [])

    const deleteHandler = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8000/api/deleteNote/${id}`)
            .then((res) => {
                const updatedNote = notes.filter((note) => note._id !== id)
                setNotes(updatedNote)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
            .then((res) => {
                navigate('/login')
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>

            <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
                <Link className="navbar-brand" to="/profile">Todo List</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/createNote/form'}>Add Note</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-light" onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container my-3">
                <h1 className="display-4">Your Notes</h1>
                <div className="row my-3">
                    {notes.map((note) => (
                        <div key={note._id} className="col-md-6">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{note.title}</h5>
                                    <p className="card-text">{note.description}</p>
                                    <Link to={`/oneNote/${note._id}`} className="btn btn-primary mr-2">Details</Link>
                                    <Link to={`/editNote/${note._id}`} className="btn btn-primary mr-2 mx-3">Edit</Link>
                                    <button onClick={() => deleteHandler(note._id)} className="btn btn-danger mx-3">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Profile;
