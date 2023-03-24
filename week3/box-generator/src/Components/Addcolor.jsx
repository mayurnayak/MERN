import React from 'react';
import { useState } from 'react';
import './Addcolor.css';

const Addcolor = (props) => {

    const {addBox, setAddBox} = props

    const [color, setColor] = useState("");
    
    const changeHandler = (e) =>{
        setColor({[e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setAddBox([...addBox, color])
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Color</label>
                    <input type="text" name='color' onChange={changeHandler}/>
                </div>
                <button>Add</button>
            </form>
        </div>
    );
}

export default Addcolor;
