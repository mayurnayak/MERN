import React from 'react';
import { useState } from 'react';

const PersonCard = (props) => {

    const [countAge, setCountAge] = useState(props.age)

    const increaseAge = () => {
        setCountAge (countAge+1)
    }

    return (
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {countAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={increaseAge}>Birthday Buttom for {props.firstName} {props.lastName}</button>
        </div>
    );
}

export default PersonCard;
