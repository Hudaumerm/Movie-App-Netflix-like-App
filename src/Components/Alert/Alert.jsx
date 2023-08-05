import React from 'react'

function Alert() {
  return (
    <div>
         <Alert key='success' variant='success'>
         Movie is successfully added to my list
          <Alert.Link href="#"><Link to='/mylist'>Click to see your list</Link></Alert.Link>
        </Alert>
    </div>
  )
}

export default Alert