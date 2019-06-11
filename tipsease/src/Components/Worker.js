import React from 'react';

const Worker = props => {
    <ul>
        <li>{props.worker.username}</li>
        <li>{props.worker.first_name}</li>
        <li>{props.worker.last_name}</li>
        <li>{props.worker.occupation}</li>
        <li>{props.worker.user_type}</li>
    </ul>
}

export default Worker;