import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import DataContext from '../context/DataContext'
import { useParams, Link, useHistory } from 'react-router-dom';
import { deleteTask, editTask } from '../http/taskAPI';

const TaskPage = () => {

  const { tasks, setTasks } = useContext(DataContext);
  const { id } = useParams();
  const task = tasks.find(task => (task.id).toString() === id);
  const history = useHistory();

  const handleDelete = async (id) => {
    await deleteTask(id);
    const taskList = tasks.filter(task => task.id !== id);
    setTasks(taskList);
    history.push('/')
  }

  const handleCancel = async (id) => {
    if (task.status === 'IN PROGRESS') {
      task.status = 'CANCELED';
      await editTask(task.id, task.title, task.content, task.expiredAt, task.status);
      history.push('/');
    }
    else {
      alert("This task can't be canceled");
    }
  }

  const handleFinish = async (id) => {
    if (task.status === 'IN PROGRESS') {
      task.status = 'COMPLETE';
      await editTask(id, task.title, task.content, task.expiredAt, task.status);
      history.push('/');
    }
    else {
      alert("This task can't be finished");
    }
  }


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
          <Button variant="outline-danger" className='me-3' onClick={() => handleDelete(id)}>Delete Task</Button>
          {task.status === "IN PROGRESS" && <Link to={`/edit/${id}`}><Button variant='outline-primary' className='me-3'>Edit Task</Button></Link>}
          <Button variant='outline-danger' className='me-3' onClick={() => handleCancel(id)}>Cancel Task</Button>
          <Button variant='outline-success' className='me-3' onClick={() => handleFinish(id)}>Finish Task</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default TaskPage