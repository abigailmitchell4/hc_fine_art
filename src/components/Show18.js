import React from 'react'
import { Link, } from 'react-router-dom'

const Show18 = (props) => (
  <>
    <div className='flex-c'>
      <div className='margin-header'>
        <div className='flex-reverse'>
          <div className='flex-c print-info margin space-btwn'>
            <div className='w100 end'>
              <div className='align-r gray'>
                <h4 className='heading-sm'>Title:</h4>
                <p className='p-meta'>{props.location.state.title} {props.match.params.id}</p>
                <h4 className='heading-sm'>Media:</h4>
                <p className='p-meta'>{props.location.state.media}</p>
              </div>
            </div>
            <div>
              <Link
                className='back-btn'
                to='/2018'
                >
                back to thumbnails
              </Link>
            </div>
          </div>
          <div className='flex-c margin'>
            { props.location.state.image === "/static/media/litho_border.170dad9c.jpg" ?
            <img className='show-img-long' src={props.location.state.image} alt='print'/>
            :
            <img className='show-img' src={props.location.state.image} alt='print'/>
            }
          </div>
    
        </div>
      </div>
    </div>
  </>
)

export default Show18