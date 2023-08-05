import React from 'react'
import GetStarted from './Components/GetStarted/GetStarted'
import FirstNavBar from './Components/GetStarted/FirstNavBar/FirstNavBar'
import Step1 from './Components/SignUp/SignUpStep1/Step1'
import Step2 from './Components/SignUp/SignUpStep2/Step2'
import Step3 from './Components/SignUp/SignUpStep3/Step3'
import SignIn from './Components/SignIn/SignIn'

function Start() {
  return (
    <div className='start'>
        {/* <FirstNavBar/>
          <GetStarted/> */}
          {/* <Step3/> */}
          <SignIn/>
    </div>
  )
}

export default Start