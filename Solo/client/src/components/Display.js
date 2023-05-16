import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Display = (props) => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allNotes', {withCredentials:true})
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


    return (
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

    );
}

export default Display;
