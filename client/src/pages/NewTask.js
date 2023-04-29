import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import DataContext from '../context/DataContext'
import { useHistory } from 'react-router-dom';
import { addTask } from '../http/taskAPI';

const NewTask = () => {

  const { tasks, setTasks } = useContext(DataContext);
  const [ newTitle, setNewTitle ] = useState('');
  const [ newContent, setNewContent ] = useState('');
  const [ newExpiredAt, setNewExpiredAt ] = useState('');
  const history = useHistory(); 

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newTitle || !newContent || !newExpiredAt) {
      alert('All fields must be filled!');
      return;
    }
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = {
      id: id,
      title: newTitle,
      content: newContent,
      expiredAt: newExpiredAt,
      status: new Date().toISOString().slice(0, 10) >= newExpiredAt ? "FAILED" : "IN PROGRESS"
    }
    await addTask(newTask.title, newTask.content, newTask.expiredAt, newTask.status);
    const allTasks = [...tasks, newTask];
    setTasks(allTasks);
    setNewTitle('');
    setNewContent('');
    history.push('/');
  }

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
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Form.Control 
            className='mt-3'
            placeholder="Content"
            type='text'
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            type='date'
            placeholder='expired date'
            value={newExpiredAt}
            onChange={(e) => setNewExpiredAt(e.target.value)}
          />
          <Button
            variant={"outline-success"}
            className='mt-3'
            type='submit'
            onClick={(e) => handleAdd(e)}
          >
            Create
          </Button>
        </Form>
      </Card>
    </Container>
  )
}

export default NewTask