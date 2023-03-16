import React from 'react';
import { useState } from 'react';

const PersonCard = (props) => {

    const [ageCount, setAgeCount] = useState(props.age);

    const incrementAge = () => {
        setAgeCount(ageCount+1)
    }

    return (
        <div>
            <h2>First Name: {props.firstName} {props.lastName}</h2>
            <p>Age:{ageCount}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={incrementAge}>Birthday Button for {props.firstName}</button>
        </div>
    );
}

export default PersonCard;
