import React from 'react';

import Worker from './Worker';

const WorkerList = props => {
    return (
        <ul>
          {props.workers.map(worker => {
              return <Worker key={worker.username} worker={worker} />
          })}
        </ul>
    )
}

export default WorkerList;