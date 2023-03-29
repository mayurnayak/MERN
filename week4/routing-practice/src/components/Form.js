import  './Form.css';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const navigate = useNavigate()

    const [word, setWord] = useState("")
    const [divColor, setDivColor] = useState("")
    const [textColor, setTextColor] = useState(0)

    const submitHandler = (e) => {
        e.preventDefault()
        navigate(`/${word}/${divColor}/${textColor}`)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    {/* <label>Type something!</label> */}
                    <input type="text" placeholder='Type something!' onChange={(e) => setWord(e.target.value)} />
                </div>

                <div>
                    {/* <label>Set your Background Color!</label> */}
                    <input type="text" placeholder='Set your Background Color!' onChange={(e) => setDivColor(e.target.value)} />
                </div>

                <div>
                    {/* <label>How bout the Text Color?</label> */}
                    <input type="text" placeholder='How bout the Text Color?' onChange={(e) => setTextColor(e.target.value)} />
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;
