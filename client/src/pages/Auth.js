import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import DataContext from '../context/DataContext';
import { useHistory } from 'react-router-dom';
import { login } from '../http/userAPI';

const Auth = () => {

  const { setIsAuth } = useContext(DataContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleAuth = async () => {
    try {
      console.log(1);
      await login(email, password);
      setIsAuth(true);
      setEmail('');
      setPassword('');
      history.push('/');
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Authorization</h2>
        <Form className='d-flex flex-column' onSubmit={(e) => {e.preventDefault();}}>
          <Form.Control
            className="mt-3"
            placeholder="Email"
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
            onClick={() => handleAuth()}
          >
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth