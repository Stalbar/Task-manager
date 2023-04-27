import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import DataContext from '../context/DataContext'
import { useParams } from 'react-router-dom';

const TaskPage = () => {

  const { tasks, setTasks } = useContext(DataContext);
  const { id } = useParams();
  const task = tasks.find(task => (task.id).toString() === id);


  return (
    <Container>
      <Card className='m-3'>
        <Card.Header>{task.title}</Card.Header>
        <Card.Body>
          <Card.Subtitle>{task.expiredAt}</Card.Subtitle>
          <Card.Text>{task.content}</Card.Text>
        </Card.Body>
        <Card.Footer>{task.status}</Card.Footer>
      </Card>
      <Row className='mt-1 mb-2 text-center'>
        <Col>
          <Button variant="outline-danger" className='me-3'>Delete Task</Button>
          <Button variant='outline-primary'>Edit Task</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default TaskPage