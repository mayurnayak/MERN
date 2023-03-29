import React from 'react';
import './Display.css'

const Display = (props) => {

    const { showTodo, setShowTodo } = props

    const toggleTodo = (todo) => {
        const updatedShowTodo = showTodo.map((newtodo) => {
            if (newtodo === todo) {
                newtodo.doneTodo = !newtodo.doneTodo
            }
            return newtodo
        })
        setShowTodo(updatedShowTodo) 
    }

    const deleteHandler = (todo) => {
        const deletedTodo = showTodo.filter((newtodo) => newtodo !== todo)
        setShowTodo(deletedTodo)
    }

    return (
        <div>
            {
                showTodo.map((todo, idx) => (
                    <div key={idx} className="note">
                        {
                            todo.doneTodo ?
                            <h4 style={{textDecoration:'line-through'}}>{todo.note}</h4> :
                            <h4>{todo.note}</h4>
                        }     
                        <input className='checkbox' type="checkbox" name="doneTodo" defaultChecked={todo.doneTodo} onChange={() => toggleTodo(todo)} />
                        <button onClick={() => deleteHandler(todo)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Display;
