import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { registration } from '../http/userAPI';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegistration = async () => {
    try {
      await registration(email, password);
      history.push('/auth');
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>Registration</h2>
        <Form className='d-flex flex-column' onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            className='mt-3'
            placeholder='Email'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant={"outline-success"}
            className='mt-3'
            type='submit'
            onClick={() => handleRegistration()}
          >
            Register
          </Button>
        </Form>
      </Card>
    </Container>
  )
}

export default Register