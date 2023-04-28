import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const UtilsList = () => {
  return (
    <Form className='mt-5'>
      
      <Form.Label>Search task</Form.Label>
      <Form.Control input='text'></Form.Control>
      <Link to='/task'><Button variant={"outline-success"} className='mt-2'>Add Task</Button></Link>
    </Form>
  )
}

export default UtilsList