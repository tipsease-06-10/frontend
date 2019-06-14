import React from 'react';

const Worker = props => {
    return (
    <div className='worker-container container'>
        <ul>
         <li><strong>First Name: </strong>{props.worker.first_name}</li>
         <li><strong>Last Name: </strong>{props.worker.last_name}</li>
         <li><strong>Occupation: </strong>{props.worker.occupation}</li>
         <li>{props.worker.profile_photo}</li>
         <li><strong>Tagline: </strong>{props.worker.tagline}</li>
         <li>{props.worker.user_type}</li>
         <li><strong>Username: </strong>{props.worker.username}</li>
         <li><strong>Working Since: </strong>{props.worker.working_since}</li>
        </ul>
    </div>
    )
    
}

export default Worker;