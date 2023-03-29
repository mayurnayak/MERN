import React from "react";
import { useState } from "react";

const Form = (props) => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const onChangeHandler = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form>
                <div class="mb-3 row">
                    <label htmlFor="firstName" class="col-sm-2 col-form-label">First Name </label>
                    <div class="col-sm-3">
                        <input type="text" name="firstName" onChange={onChangeHandler} class="form-control"/>
                    </div>
                </div>

                <div class="mb-3 row">
                    <label htmlFor="lastName" class="col-sm-2 col-form-label">Last Name </label>
                    <div class="col-sm-3">
                        <input type="text" name="lastName" onChange={onChangeHandler} class="form-control"/>
                    </div>
                </div>

                <div class="mb-3 row">
                    <label htmlFor="email" class="col-sm-2 col-form-label">Email </label>
                    <div class="col-sm-3">
                        <input type="email"name="email"onChange={onChangeHandler} class="form-control"/>
                    </div>
                </div>

                <div class="mb-3 row">
                    <label htmlFor="password" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-3">
                        <input type="password" name="password" onChange={onChangeHandler} class="form-control"/>
                    </div>
                </div>

                <div class="mb-3 row">
                    <label htmlFor="confirmPassword" class="col-sm-2 col-form-label"> Confirm Password </label>
                    <div class="col-sm-3">
                        <input type="password" name="confirmPassword" onChange={onChangeHandler} class="form-control"/>
                    </div>
                </div>
            </form>

            <h2>Your Form Data</h2>
            <h4>First Name: {userData.firstName}</h4>
            <h4>Last Name: {userData.lastName}</h4>
            <h4>Email: {userData.email}</h4>
            <h4>Password: {userData.password}</h4>
            <h4>Confirm Password: {userData.confirmPassword}</h4>
        </div>
    );
};

export default Form;
