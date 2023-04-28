import React, { useContext, useEffect, useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';

const EditTask = () => {

  const { tasks, setTasks } = useContext(DataContext);
  const { id } = useParams();
  const task = tasks.find(task => (task.id).toString() === id);
  const [ editTitle, setEditTitle ] = useState('');
  const [ editContent, setEditContent ] = useState('');
  const [ editExpiredAt, setEditExpiredAt ] = useState('');

  useEffect(() => {
    if (task) {
      setEditTitle(task.title);
      setEditContent(task.content);
      setEditExpiredAt(task.expiredAt);
    }
  }, [task]);

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{width: 600}} className="p-5">
        <Form className='d-flex flex-column'>
          <Form.Control
            type='text'
            className='mt-3'
            placeholder='Title'
          />
          <Form.Control 
            className='mt-3'
            placeholder="Content"
            type='text'
          />
          <Form.Control
            className='mt-3'
            type='date'
            placeholder='expired date'
          />
          <Button
            variant={"outline-success"}
            className='mt-3'
            type='submit'
          >
            Edit
          </Button>
        </Form>
      </Card>
    </Container>
  )
}

export default EditTask