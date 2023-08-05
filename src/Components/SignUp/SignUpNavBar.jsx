import React from 'react'
import './SignUpNavBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap'

function SignUpNavBar() {
  return (
    <div>
        <Navbar expand="lg" className="step1-nav">
      <Container className='step1-nav-container'>
        <Navbar.Brand href="#home">
        <img
              src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
              width="200"
              height="50"
              className="d-inline-block align-top logo-step1"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <Nav.Link href="#link">Sign In</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default SignUpNavBar