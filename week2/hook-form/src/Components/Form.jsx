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
                <div className="format">
                    <label htmlFor="firstName">First Name </label>
                    <input type="text" name="firstName" onChange={onChangeHandler} />{" "}
                </div>
                <label htmlFor="lastName">Last Name </label>
                <input type="text" name="lastName" onChange={onChangeHandler} /> <br />
                <label htmlFor="email">Email </label>
                <input type="email" name="email" onChange={onChangeHandler} /> <br />
                <label htmlFor="password">Password </label>
                <input
                    type="password"
                    name="password"
                    onChange={onChangeHandler}
                />{" "}
                <br />
                <label htmlFor="confirmPassword">Confirm Password </label>
                <input
                    type="password"
                    name="confirmPassword"
                    onChange={onChangeHandler}
                />
            </form>

            <h2>Your Form Data</h2>
            <h3>First Name: {userData.firstName}</h3>
            <h3>Last Name: {userData.lastName}</h3>
            <h3>Email: {userData.email}</h3>
            <h3>Password: {userData.password}</h3>
            <h3>Confirm Password: {userData.confirmPassword}</h3>
        </div>
    );
};

export default Form;
