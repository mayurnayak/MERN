import React from 'react';
// import { useState } from 'react';

const DisplayData = (props) => {

    const {showData, setShowData} = props
    // console.log(`this is from Display ${showData}`)
    
    return (
        <div>
            {
                showData.map((item, idx) => (
                    <div key={idx}>
                        <h2>First Name: {item.firstName}</h2>
                        <h2>Last Name: {item.lastName}</h2>
                        <h2>Email: {item.email}</h2>
                        <h2>Password: {item.password}</h2>
                        <h2>Confirm Password: {item.confirmPassword}</h2>
                    </div>
                ))
            }
        </div>
    );
}

export default DisplayData;
