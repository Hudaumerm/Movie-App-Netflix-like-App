import React from 'react'
import '../GetStarted/FirstNavBar/FirstNavBar.css'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { BsGlobe } from 'react-icons/bs'

function SignInNavBar() {
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
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto first-nav-links">
        <select  id="basic-nav-dropdown" className='first-nav-dropdown'>
          <option href="#action/3.1"selected > <BsGlobe/> English</option>
          <option href="#action/3.2">हिन्दी</option>
        </select>

      </Nav>
    </Navbar.Collapse> */}
  
</Navbar>

    )
}

export default SignInNavBar