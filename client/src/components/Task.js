import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Task = ({task}) => {

  const history = useHistory();
  
  const handleClick = (id) => {
    history.push(`/task/${id}`);
  }

  return (
    <Col md={3} className='mt-3'>
      <Card border={task.status === "COMPLETE" ? "success" : task.status === "IN PROGRESS" ? "warning" : "danger"} style={{width: 150, cursor: 'pointer'}} onClick={() => handleClick(task.id)}>
        <Card.Header>{task.title}</Card.Header>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{task.expiredAt}</Card.Subtitle>
          <Card.Text>{task.content.length > 25 ? task.content.substring(0, 25) + "..." : task.content}</Card.Text>
        </Card.Body>
        <Card.Footer>{task.status}</Card.Footer>
      </Card>
    </Col>
  )
}

export default Task