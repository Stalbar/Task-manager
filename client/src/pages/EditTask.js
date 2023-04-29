import React, { useContext, useEffect, useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';
import { editTask } from '../http/taskAPI';

const EditTask = () => {

  const { tasks, setTasks } = useContext(DataContext);
  const { id } = useParams();
  const task = tasks.find(task => (task.id).toString() === id);
  const [ editTitle, setEditTitle ] = useState('');
  const [ editContent, setEditContent ] = useState('');
  const [ editExpiredAt, setEditExpiredAt ] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (task && task.status === "IN PROGRESS") {
      setEditTitle(task.title);
      setEditContent(task.content);
      setEditExpiredAt(task.expiredAt);
    }
    else {
      history.push('/');
    }
  }, [task]);

  const handleEdit = async (id) => {
    if (!editTitle || !editContent || !editExpiredAt) {
      alert('All fields must be filled!');
      return;
    }
    const newTask = {
      id: id,
      title: editTitle,
      content: editContent,
      expiredAt: editExpiredAt,
      status: new Date().toISOString().slice(0, 10) > editExpiredAt ? "FAILED" : "IN PROGRESS",
    }
    await editTask(newTask.id, newTask.title, newTask.content, newTask.expiredAt, newTask.status);
    setTasks(tasks.map(task => task.id === id ? { ...newTask} : task));
    setEditContent('');
    setEditTitle('');
    setEditExpiredAt('');
    history.push('/')
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{width: 600}} className="p-5">
        <Form className='d-flex flex-column' onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            type='text'
            className='mt-3'
            placeholder='Title'
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <Form.Control 
            className='mt-3'
            placeholder="Content"
            type='text'
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            type='date'
            placeholder='expired date'
            value={editExpiredAt}
            onChange={(e) => setEditExpiredAt(e.target.value)}
          />
          <Button
            variant={"outline-success"}
            className='mt-3'
            type='submit'
            onClick={() => handleEdit(id)}
          >
            Edit
          </Button>
        </Form>
      </Card>
    </Container>
  )
}

export default EditTask