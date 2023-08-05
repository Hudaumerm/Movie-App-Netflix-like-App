import React from 'react'
import './Step1.css'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignUpNavBar from '../SignUpNavBar'

function Step1() {
  return (
    <div className='step1' id="step1">
         <SignUpNavBar/>

    <Container className='step1-container'>
        <div className="reg-wrapper">
            <Image src="https://www.cpe.rutgers.edu/wp-content/uploads/2021/06/electronic-devices-icon-red.png" alt="loading" />
            <p className='layer-1'> Step <span >1</span> of <span>3</span></p>
            <h3 className="h3 layer-2">Finish setting up your account</h3>
            <p className='layer-3'>Netflix is personalised for you. Create a password to watch on any device at any time.</p>
            <button className='step1-next-btn'>Next</button>
        </div>
    </Container>
    </div>
  )
}

export default Step1