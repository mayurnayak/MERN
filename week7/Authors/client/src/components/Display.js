import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Display = () => {
    const [allAuthors, setAllAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/allAuthors')
            .then((res) => {
                console.log(res)
                // setAllAuthors(res.data)

                const sortedAuthors = res.data.sort((a, b) => a.name.localeCompare(b.name));
                setAllAuthors(sortedAuthors);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteHandler = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8000/api/deleteAuthor/${id}`)
            .then((res) => {
                const updatedAuthor = allAuthors.filter((author) => author._id !== id)
                setAllAuthors(updatedAuthor)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    
                    <Link to={'/createAuthor/form'} className="btn btn-primary mb-3" >Add an author</Link>
                    <h3 className="mb-3 purple-text">We have quotes by:</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Author</th>
                                <th scope="col">Actions Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allAuthors.map((author) => (
                                <tr key={author._id}>
                                    <th scope="col">{author.name}</th>
                                    <th scope="col">
                                        <Link to={`/updateAuthor/${author._id}`}><button className="btn btn-primary me-2">Edit</button></Link>
                                        <button onClick={() => deleteHandler(author._id)} className="btn btn-danger">Delete</button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default Display;
