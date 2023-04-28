import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import DataContext from '../context/DataContext'
import { useParams, Link } from 'react-router-dom';

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
          <Link to={`/edit/${id}`}><Button variant='outline-primary'>Edit Task</Button></Link>
        </Col>
      </Row>
    </Container>
  )
}

export default TaskPage