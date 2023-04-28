import React from 'react'
import { Navbar, Container, Nav }  from 'react-bootstrap'; 

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Task Manager</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href='/auth'>Login</Nav.Link>
          <Nav.Link href='/registration'>Registration</Nav.Link>
          <Nav.Link href='/'>Manage Tasks</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar