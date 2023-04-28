import React, { useContext } from 'react'
import { Navbar, Container, Nav }  from 'react-bootstrap'; 
import DataContext from '../context/DataContext';

const NavBar = () => {
  
  const { isAuth, setIsAuth } = useContext(DataContext); 
  
  const handleLogout = async() => {
    localStorage.removeItem('token');
    setIsAuth(false);
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Task Manager</Navbar.Brand>
        <Nav className="ms-auto">
          {!isAuth && <Nav.Link href='/auth'>Login</Nav.Link>}
          {!isAuth && <Nav.Link href='/registration'>Registration</Nav.Link>}
          {isAuth && <Nav.Link href='/auth' onClick={() => handleLogout()}>Logout</Nav.Link>}
          <Nav.Link href='/'>Manage Tasks</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar