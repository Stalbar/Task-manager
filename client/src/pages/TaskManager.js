import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UtilsList from '../components/UtilsList'
import TaskList from '../components/TaskList'
import DataContext from '../context/DataContext'

const TaskManager = () => {
  
  const {searchResults} = useContext(DataContext);

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