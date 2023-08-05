import React from 'react'
import './GetStarted.css'
import { Button, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function GetStarted() {
 
    const handleClick=(e)=>{
       e.preventDefault()
    }
  return (
    
    <section className='get-started'>
       <div className="get-started-info">
        <div className="get-started-title">
        <h1 className="h1 ">Unlimited movies, TV shows and more</h1>
       <p className="h4">Watch anywhere. Cancel anytime.</p>
       </div>
       <div className="grt-started-form">
        <Form>
            <h3 className="h3 get-started-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
        
        <Form.Group className="mb-3 get-started-input-div " controlId="exampleForm.ControlInput1">
        
        <Form.Control type="email" placeholder="Email Address" />
        <Button onClick={handleClick}>Get Started</Button>
        
      </Form.Group>
        </Form>
       </div>
       </div>
       <div className="get-started-fade-bottom"></div>
    </section>
  )
}

export default GetStarted