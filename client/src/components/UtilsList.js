import React from 'react'
import { Button, Form } from 'react-bootstrap'

const UtilsList = () => {
  return (
    <Form className='mt-5'>
      
      <Form.Label>Search task</Form.Label>
      <Form.Control input='text'></Form.Control>
      <Button variant={"outline-success"} className='mt-2'>Add Task</Button>
    </Form>
  )
}

export default UtilsList