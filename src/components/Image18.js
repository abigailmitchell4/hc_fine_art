import React from 'react'

const Image18 = (props) => {

return (
  <>
    <div
      src={props.image}
      className='img-container'
    >
      <img className='print-img' src={props.image} alt='screen print'/>
    </div>
  </>
)}

export default Image18