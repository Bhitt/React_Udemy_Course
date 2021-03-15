import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is just practice.</p>
            <p>Of course it will repeat. Username: {props.username}</p>
        </div>
    )
}

export default userOutput;