import React from 'react'
import Name from './Name'
import Samples from './Samples'

const Home = () => {
  return (
    <>
      <div className='main-home-container'>
        <Name />
        <div className='outer-wrapper'>
          <Samples/>
        </div>
      </div>
    </>
  )
}

export default Home