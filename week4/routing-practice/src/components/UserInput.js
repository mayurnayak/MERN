import React from 'react';
import { useParams } from 'react-router-dom';

const UserInput = () => {
    const {user, divColor, textColor} = useParams()
    return (
        <div style={{backgroundColor:divColor, 
                    color:textColor, 
                    padding:"10px", 
                    marginTop:"10px", 
                    border: "1px solid grey",
                    }}>
            
            {
                isNaN(user)?
                <h2>The word is: {user}</h2>:
                <h2>The number is: {user}</h2>
            }
        </div>
    );
}

export default UserInput;
