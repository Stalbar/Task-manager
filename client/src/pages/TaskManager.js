import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UtilsList from '../components/UtilsList'
import TaskList from '../components/TaskList'
import DataContext from '../context/DataContext'
import { getTasks } from '../http/taskAPI'

const TaskManager = () => {
  
  const { searchResults, setTasks } = useContext(DataContext);

  useEffect(() => {
    getTasks().then(data => {
      setTasks(data);
    }) 
  }, [])

  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <UtilsList />
        </Col>
        <Col md={9}>
          <TaskList tasks={searchResults}/>
        </Col>
      </Row>
    </Container>
  )
}

export default TaskManager