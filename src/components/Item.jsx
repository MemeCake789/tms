import React, { useState } from 'react';
import './Item.css'

function Item() {
    const [status, toggleStatus] = useState('TODO');
    const [task, setTask] = useState('TEMPLATE');

    
    const toggleStatusHandler = () => {
        if (status === 'TODO') {
            toggleStatus('DONE');
        } else if (status === 'DONE') {
            toggleStatus('KILL');
        } else {
            toggleStatus('TODO');
        }
    }
    
  return (
    <div className='item'>
      <button className='status' onClick={toggleStatusHandler}>{status}</button>
      <p className='task'>{task}</p>
    </div>
  );
}

export default Item;