import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';

const UtilsList = () => {

  const { search, setSearch } = useContext(DataContext);

  return (
    <Form className='mt-5'>
      
      <Form.Label>Search task</Form.Label>
      <Form.Control 
        input='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      >

      </Form.Control>
      <Link to='/task'><Button variant={"outline-success"} className='mt-2'>Add Task</Button></Link>
    </Form>
  )
}

export default UtilsList