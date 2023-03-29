import React from 'react';
import { useState } from 'react';
import './Form.css';

const Form = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangePassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    

    return (
        <div className='container'>

            <form>
                <div className='userInput'>
                    <label>First Name </label>
                    <input type="text" name='firstName' onChange={handleFirstName}/>
                </div>

                {
                    firstName.length <3 && firstName.length !==0 ?
                    <p>First Name must be at least 2 characters</p>:
                    null
                }

                <div className='userInput'>
                    <label>Last Name </label>
                    <input type="text" name='firstName' onChange={handleLastName}/>
                </div>
                {
                    lastName.length < 3 && lastName.length !==0 ?
                    <p>Last Name must be at least 2 characters</p>:
                    null
                }

                <div className='userInput'>
                    <label>Email </label>
                    <input type="email" name='email' onChange={handleEmail}/>
                </div>
                {
                    email.length < 3 && email.length !==0 ?
                    <p>Email must be at least 2 characters</p>:
                    null
                }

                <div className='userInput'>
                    <label>Password </label>
                    <input type="password" name='password' onChange={handlePassword}/>
                </div>
                {
                    password.length < 8 && password.length !==0 ?
                    <p>Password must be at least 8 characters</p>:
                    null
                }

                <div className='userInput'>
                    <label>Confirm Password </label>
                    <input type="password" name='confirmPassword' onChange={handleChangePassword}/>
                </div>
                {
                    password !== confirmPassword && firstName.length !==0 ?
                    <p>Passwords much match</p>:
                    null
                }
            </form>

            <div className='formData'>
                <h2>Your Form Data</h2>
                <p>First Name: - {firstName}</p>
                <p>Last Name: -  {lastName}</p>
                <p>Email: -  {email}</p>
                <p>Password: -  {password}</p>
                <p>Confirm Password: -  {confirmPassword}</p>
            </div>

        </div>
    );
}

export default Form;
