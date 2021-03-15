import React from 'react';


const userInput = (props) => {
    const style = {
        border: '2px solid green'
    };

    return (
        <div>
            <input type="text" onChange={props.changed} value={props.username} style={style}/>
        </div>
    );
};

export default userInput;