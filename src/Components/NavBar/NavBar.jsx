import React from 'react'
import './NavBar.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    
        <Navbar expand="lg" className="navbar">
      <Container className='nav-container'>
        <Navbar.Brand href="#home"><Link to="/">
        <img
              src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
              width="100"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-between">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/moviesonly'>Movies</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/tvshows'>Tv Shows</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/mylist">My List</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/browsebygenre">Browse by Genre </Link></Nav.Link>
          
             <Nav.Link><Button className='sign-out-btn-home'>Sign out</Button></Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavBar