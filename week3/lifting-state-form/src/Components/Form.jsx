import React from 'react';
import { useState } from 'react';

const Form = (props) => {

    const {showData, setShowData} = props
    // console.log(props)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(formData)
        setShowData([...showData, formData])
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    }

    return (
        <div>
            <h1>Form</h1>

            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name </label>
                    <input type="text" name='firstName' onChange={changeHandler} value={formData.firstName}/>
                    {
                        formData.firstName.length < 3 && formData.firstName.length !==0 ?
                        <p>First Name must be at leat 3 characters</p>:
                        null
                    }
                </div>
                <div>
                    <label>Last Name </label>
                    <input type="text" name='lastName' onChange={changeHandler} value={formData.lastName}/>
                    {
                        formData.lastName.length < 3 && formData.lastName.length!==0 ?
                        <p>Last Name must be at leat 3 characters</p>:
                        null
                    }
                </div>
                <div>
                    <label>email </label>
                    <input type="text" name='email' onChange={changeHandler} value={formData.email}/>
                    {
                        formData.email.length < 5 && formData.email.length!==0 ?
                        <p>Email must be at leat 5 characters</p>:
                        null
                    }
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" name='password' onChange={changeHandler} value={formData.password}/>
                    {
                        formData.password.length < 8 && formData.password.length!==0 ?
                        <p>Password must be at leat 8 characters</p>:
                        null
                    }
                </div>
                <div>
                    <label>Confirm Password </label>
                    <input type="password" name='confirmPassword' onChange={changeHandler} value={formData.confirmPassword}/>
                    {
                        formData.password !== formData.confirmPassword && formData.confirmPassword.length !==0 ?
                        <p>Password must match</p>:
                        null
                    }
                </div>
                <button>Submit Data</button>
            </form>
        </div>
    );
}

export default Form;
