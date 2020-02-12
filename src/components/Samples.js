import React from 'react'
import hc2 from '../images/hc2.png'
import hc3 from '../images/hc3.png'
import hc4 from '../images/hc4.png'
import hc5 from '../images/hc5.png'

const Samples = () => {
  return(
    <>
      <div className='wrapper'>
        {/* <p className='slide one'>samples</p>
        <p className='slide two'>samples</p>
        <p className='slide three'>samples</p> */}
        <div className='slide one'><img className='print'src={hc2} alt=''/></div>
        <div className='slide'><img className='print' src={hc3} alt=''/></div>
        <div className='slide'><img className='print' src={hc4} alt=''/></div>
        <div className='slide'><img className='print' src={hc5} alt=''/></div>
      </div>
    </>
  )
}

export default Samples