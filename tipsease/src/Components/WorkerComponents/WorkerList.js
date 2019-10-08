import React from 'react';

import Worker from './Worker';

const WorkerList = props => {
    return (
        <div>
          {props.workers.map(worker => {
              return <Worker key={worker.username} worker={worker} />
          })}
        </div>
    )
}

export default WorkerList;


