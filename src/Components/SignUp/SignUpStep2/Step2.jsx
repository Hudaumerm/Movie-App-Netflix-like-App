import React, { useState } from 'react'
import './Step2.css'
import SignUpNavBar from '../SignUpNavBar'
import { Button, Container, Form, Image } from 'react-bootstrap'

function Step2() {
    const [data, setData] = useState()
    const handleChange=(e)=>{
        e.preventDefault()
         
        setData=({...data,[e.target.name]:e.target.value})


    }
  return (
    <div className='step2'>
        <SignUpNavBar/>
        <Container className='step2-container'>
        <div className="reg-wrapper">
            <p className='layer-1'> Step <span >2</span> of <span>3</span></p>
            <h3 className="h3 layer-2">Create a password to start your membership</h3>
         <p className='layer-3'>Just a few more steps and you're done!We hate paperwork, too.</p>
        
            <Form className='step2-form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" name="email" value={data.email} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" hasValidation>
        <Form.Control type="password" placeholder="Password" name="password" value={data.password} onChange={handleChange} required/>
        
      </Form.Group>
      
      <Button variant="primary" type="submit" className='step2-next-btn'>
        Submit
      </Button>
    </Form>
        </div>
    </Container>
    </div>
  )
}

export default Step2