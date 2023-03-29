import React from 'react';
import { useState } from 'react';
import './Form.css'

const Form = (props) => {

    const { showTodo, setShowTodo } = props

    const [todo, setTodo] = useState({
        note: "",
        doneTodo: false
    });

    const changeHandler = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        setShowTodo([...showTodo, todo])

        setTodo({
            note: "",
            doneTodo: false
        })
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" placeholder='Enter your things to do!' name='note' onChange={changeHandler} value={todo.note} />
                </div>
                <button>Add</button>
            </form>
        </div>
    );
}

export default Form;
