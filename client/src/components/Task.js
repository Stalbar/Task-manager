import React from 'react'
import { Card, Col } from 'react-bootstrap'

const Task = ({task}) => {
  return (
    <Col md={3} className='mt-3'>
      <Card border={task.status === "SUCCESS" ? "success" : task.status === "IN PROGRESS" ? "warning" : "danger"} style={{width: 150, cursor: 'pointer'}}>
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