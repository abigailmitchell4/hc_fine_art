import React from 'react'
import { Link, } from "react-router-dom"
import Image19 from './Image19'
import blue_white1 from '../Haylee_Art_Images/blue_white1.jpg'
import ghost_yellow from '../Haylee_Art_Images/ghost_yellow.jpg'
import hands_blue1 from '../Haylee_Art_Images/hands_blue1.jpg'
import hands_yellow from '../Haylee_Art_Images/hands_yellow.jpg'
import pink_blue1 from '../Haylee_Art_Images/pink_blue1.jpg'
import pink_green1 from '../Haylee_Art_Images/pink_green1.jpg'
import pink_green2 from '../Haylee_Art_Images/pink_green2.jpg'
import pink_green3 from '../Haylee_Art_Images/pink_green3.jpg'
import pink_green4 from '../Haylee_Art_Images/pink_green4.jpg'
import pink_red1 from '../Haylee_Art_Images/pink_red1.jpg'
import pink_red2 from '../Haylee_Art_Images/pink_red2.jpg'
import white_red1 from '../Haylee_Art_Images/white_red1.jpg'
import white_red2 from '../Haylee_Art_Images/white_red2.jpg'
import white_red3 from '../Haylee_Art_Images/white_red3.jpg'
import white_red4 from '../Haylee_Art_Images/white_red4.jpg'
import white_red5 from '../Haylee_Art_Images/white_red5.jpg'
import yellow_1 from '../Haylee_Art_Images/yellow_1.jpg'
import yellow_2 from '../Haylee_Art_Images/yellow_2.jpg'
import yellow_3 from '../Haylee_Art_Images/yellow_3.jpg'
import yellow_4 from '../Haylee_Art_Images/yellow_4.jpg'

const Work19 = () => {

  const images = [
    {image: yellow_1, media: 'Screen print', title: 'Monoprint'},
    {image: yellow_2, media: 'Screen print', title: 'Monoprint'},
    {image: yellow_3, media: 'Screen print', title: 'Monoprint'},
    {image: yellow_4, media: 'Screen print', title: 'Monoprint'},
    {image: white_red1, media: 'Screen print', title: 'Monoprint'},
    {image: white_red2, media: 'Screen print', title: 'Monoprint'},
    {image: white_red3, media: 'Screen print', title: 'Monoprint'},
    {image: white_red4, media: 'Screen print', title: 'Monoprint'},
    {image: white_red5, media: 'Screen print', title: 'Monoprint'},
    {image: pink_red1, media: 'Screen print', title: 'Monoprint'},
    {image: pink_red2, media: 'Screen print', title: 'Monoprint'},
    {image: blue_white1, media: 'Screen print', title: 'Monoprint'},
    {image: hands_blue1, media: 'Screen print', title: 'Monoprint'},
    {image: pink_blue1, media: 'Screen print', title: 'Monoprint'},
    {image: pink_green1, media: 'Screen print', title: 'Monoprint'},
    {image: pink_green2, media: 'Screen print', title: 'Monoprint'},
    {image: pink_green3, media: 'Screen print', title: 'Monoprint'},
    {image: pink_green4, media: 'Screen print', title: 'Monoprint'},
    {image: hands_yellow, media: 'Screen print', title: 'Monoprint'},
    {image: ghost_yellow, media: 'Screen print', title: 'Monoprint'},
  ]

  return (
    <>
      <div className='main-container flex-c'>
        <h1 className='margin-header work-header'>2019</h1>
        <div className='flex-c margin-container'>
          <div className='flex'>
              {/* <div className='img-container'> */}
              {/* <img className='print-img' src={yellow_1}/> */}
              {images.map((e,i) => (
                <Link 
                to={{
                  pathname: `/2019/${i + 1}`,
                  state: { 
                    image: `${e.image}`,
                    media: `${e.media}`,
                    title: `${e.title}`
                  }
                }}
                  key={i}
                  id={i}
                >
                  <Image19
                  image={e.image}
                  id={i}
                  />
                   {/* <img className='print-img' src={e.image}/> */}
                </Link>  
              )
              )}
              {/* </div>  */}
              
            {/* <div className='img-container'>
              <img className='print-img' src={yellow_2}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={yellow_3}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={yellow_4}/>
            </div> */}
          </div>
          {/* <div className='flex'>
            <div className='img-container'>
              <img className='print-img' src={white_red1}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={white_red2}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={white_red3}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={white_red4}/>
            </div>
          </div>
          <div className='flex'>
            <div className='img-container'>
              <img className='print-img' src={white_red5}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={pink_red1}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={pink_red2}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={blue_white1}/>
            </div>
          </div>
          <div className='flex'>
            <div className='img-container'>
              <img className='print-img' src={hands_blue1}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={pink_blue1}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={blue_white1}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={pink_green1}/>
            </div>
          </div>
          <div className='flex'>
            <div className='img-container'>
              <img className='print-img' src={pink_green1}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={pink_green2}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={pink_green3}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={pink_green4}/>
            </div>
          </div>
          <div className='flex'>
            <div className='img-container'>
             <img className='print-img' src={hands_yellow}/>
            </div>
            <div className='img-container'>
              <img className='print-img' src={ghost_yellow}/>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Work19