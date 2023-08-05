import React from 'react'
import './Step3.css'
import SignUpNavBar from '../SignUpNavBar'
import { Container } from 'react-bootstrap'
import {TiTick} from 'react-icons/ti'
import { BsCheck2, BsCheckCircle } from 'react-icons/bs'

function Step3() {
  return (
    <div className='step3'>
         <SignUpNavBar/>

<Container className='step3-container'>
    <div className="reg-wrapper">
        <BsCheckCircle className='step3-icone' />
        <p className='layer-1'> Step <span >2</span> of <span>3</span></p>
        <h3 className="h3 step3-h3">Choose your plan.</h3>
        <ul>
            <li><BsCheck2/> No commitments, cancel anytime.</li>
            <li><BsCheck2/> Everything on Netflix for one low price.</li>
            <li><BsCheck2/> No ads and no extra fees. Ever.</li>
        </ul>
        <button className='step3-next-btn'>Next</button>
    </div>
</Container>

    </div>
  )
}

export default Step3