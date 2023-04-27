import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import DataContext from '../context/DataContext'
import Task from './Task';

const TaskList = () => {

  const { tasks } = useContext(DataContext);

  return (
    <Row className='d-flex mt-5'>
      {tasks.map(task => 
        <Task key={task.id} task={task}/>
      )}
    </Row>
  )
}

export default TaskList