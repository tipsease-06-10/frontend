import React from 'react';

const Worker = props => {
    <ul>
        <li>{props.worker.username}</li>
        <li>{props.worker.profile_photo}</li>
    </ul>
}

export default Worker;