import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'

const NewTask = () => {
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
            Create
          </Button>
        </Form>
      </Card>
    </Container>
  )
}

export default NewTask