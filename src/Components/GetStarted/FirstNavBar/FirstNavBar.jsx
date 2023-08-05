import React from 'react'
import './FirstNavBar.css'
import { Container, Nav, select, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsGlobe } from 'react-icons/bs'

function FirstNavBar() {
  return (
    <Navbar expand="lg" className="first-nav navbar">
     
        <Navbar.Brand href="#home">
        <img
              src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
              width="300"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto first-nav-links">
            <Nav.Link href="#home"><Button className='first-nav-sign-in'>Sign In</Button></Nav.Link>
            <select  id="basic-nav-dropdown" className='first-nav-dropdown'>
              <option href="#action/3.1"selected > <BsGlobe/> English</option>
              <option href="#action/3.2">हिन्दी</option>
            </select>

          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  )
}

export default FirstNavBar