import React from 'react'
import { Form } from 'react-bootstrap'

const UtilsList = () => {
  return (
    <Form className='mt-5'>
      <Form.Label>Search task</Form.Label>
      <Form.Control type='text'></Form.Control>
    </Form>
  )
}

export default UtilsList