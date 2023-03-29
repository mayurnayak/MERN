import React from 'react';

const Display = (props) => {

    const {addBox} = props

    return (
        <div >
            {
                addBox.map((color, idx) => (
                    <div key={idx} className='display'
                            style={{ 
                            backgroundColor: color.color
                            }}
                    ></div>
                ))
            }
        </div>
    );
}

export default Display;
