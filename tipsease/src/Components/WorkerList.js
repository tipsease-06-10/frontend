import React from 'react';

import Worker from './Worker';

const WorkerList = props => {
    return (
        <ul>
          {props.workers.map(worker => {
              return <Worker key={worker.name} worker={worker} />
          })}
        </ul>
    )
}

export default WorkerList;