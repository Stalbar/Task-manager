import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UtilsList from '../components/UtilsList'
import TaskList from '../components/TaskList'

const TaskManager = () => {
  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <UtilsList />
        </Col>
        <Col md={9}>
          <TaskList/>
        </Col>
      </Row>
    </Container>
  )
}

export default TaskManager