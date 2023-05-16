import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = (props) => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const [errors, setErrors] = useState({})
    
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', user)
            .then((res) => {
                console.log(res);
                navigate('/profile')
            })
            .catch((err) => {
                console.log(err);
                setErrors(errors)
            })
    }


    return (
        <div>
            <form className='col-4 mx-auto' onSubmit={submitHandler}>
                <div>
                    <label className='form-label'>First Name: </label>
                    <input className='form-control' type="text" onChange={changeHandler} value={user.firstName} name='firstName'/>
                </div>
                <div>
                    <label className='form-label'>Last Name: </label>
                    <input className='form-control' type="text" onChange={changeHandler} value={user.lastName} name='lastName'/>
                </div>
                <div>
                    <label className='form-label'>Email: </label>
                    <input className='form-control' type="text" onChange={changeHandler} value={user.email} name='email'/>
                </div>
                <div>
                    <label className='form-label'>Password: </label>
                    <input className='form-control' type="password" onChange={changeHandler} value={user.password} name='password'/>
                </div>
                <div>
                    <label className='form-label'>Confirm Password: </label>
                    <input className='form-control' type="password" onChange={changeHandler} value={user.confirmPassword} name='confirmPassword'/>
                </div>
                <button>Register</button>
            </form>
            <Link to={'/login'}>Already have an account?</Link>
        </div>
)}

export default Register;