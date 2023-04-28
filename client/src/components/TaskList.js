import React from 'react'
import { Row } from 'react-bootstrap'
import Task from './Task';

const TaskList = ({tasks}) => {

  return (
    <Row className='d-flex mt-5'>
      {tasks.map(task => 
        <Task key={task.id} task={task}/>
      )}
    </Row>
  )
}

export default TaskList