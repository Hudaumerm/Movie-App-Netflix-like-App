import React from 'react'
import './SignIn.css'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import FirstNavBar from '../GetStarted/FirstNavBar/FirstNavBar'
import SignInNavBar from './SignInNavBar'

function SignIn() {
    const [click, setClick] = useState(true)
    const handleClick=()=>{
        setClick(!click)
    }
  return (
    <div className='sign'>
       <SignInNavBar/>
         <section className='sign-in'>
       <div className="sign-in-info">
       <div className="sign-in-form">
        <h2 className="h2 sign-in-title">Sign In</h2>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit" className='sign-in-btn'>
        Submit
      </Button>
      <Form.Group className="mb-3 bottom-info-1" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        <Form className="text">Need help?</Form>
      </Form.Group>
      <div className="other">
        <h6 className="h6 sign-up">New to Netflix? Sign Up now</h6>
      <div className="recaptcha-terms-of-use">
        <p className='recaptcha-terms-of-use-p'><span className='recaptcha-terms-of-use-span1'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>&nbsp; 
        <span onClick={handleClick} className="recaptcha-terms-of-use--link-span" >{click?'Learn more':"Show less"}.</span></p>
        
        <div className={click?"recaptcha-terms-of-use--disclosure-hide":"recaptcha-terms-of-use--disclosure"} >
            <span>The information collected by Google reCAPTCHA is subject to the Google  
            <a href="https://policies.google.com/privacy" id="recaptcha-privacy-link"  target="_blank">Privacy Policy</a> and 
        <a href="https://policies.google.com/terms" id="recaptcha-tos-link" target="_blank">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</span>
        </div>
        </div>
      </div>
    </Form>
       </div>
       </div>
       <div className="sign-in-fade-bottom"></div>
    </section>


    </div>
  )
}

export default SignIn