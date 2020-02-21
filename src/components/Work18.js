import React from 'react'
import { Link, } from "react-router-dom"
import Image18 from './Image18'
import litho_1 from '../Haylee_Art_Images2/litho_1.jpg'
import litho_2 from '../Haylee_Art_Images2/litho_2.jpg'
import litho_3 from '../Haylee_Art_Images2/litho_3.jpg'
import litho_4 from '../Haylee_Art_Images2/litho_4.jpg'
import litho_border from '../Haylee_Art_Images2/litho_border.jpg'
import litho_skulls from '../Haylee_Art_Images2/litho_skulls.jpg'
import moon from '../Haylee_Art_Images2/moon.jpg'


const Work18 = () => {

  const images = [
    {image: litho_1, media: 'Lithograph', title: ''},
    {image: litho_2, media: 'Lithograph', title: ''},
    {image: litho_4, media: 'Lithograph', title: ''},
    {image: litho_3, media: 'Lithograph', title: ''},
    {image: litho_border, media: 'Lithograph', title: ''},
    {image: litho_skulls, media: 'Lithograph', title: ''},
    {image: moon, media: 'Intaglio Print', title: ''},

  ]

  return (
    <>
      <div className='main-container flex-c'>
        <h1 className='margin-header work-header'>2018</h1>
        <div className='flex-c margin-container'>
          <div className='flex max'>
              {images.map((e,i) => (
                <Link 
                to={{
                  pathname: `/2018/${i + 1}`,
                  state: { 
                    image: `${e.image}`,
                    media: `${e.media}`,
                    title: `${e.title}`
                  }
                }}
                  key={i}
                  id={i}
                >
                  <Image18
                  image={e.image}
                  id={i}
                  />
                </Link>  
              )
              )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Work18