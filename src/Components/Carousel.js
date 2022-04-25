import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './style.css'

function Carousel() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://blog.japanwondertravel.com/wp-content/uploads/2021/05/Bonsai-treee-1536x1001.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3 className='textbackground center'>Welcome To IbonsaI</h3>
          <p className='textbackground center'>
            This app is used to keep track of your bonsai tree inventory by
            Displaying a quick view of all of your current bonsai trees and
            their individual current status Allowing you to add events to each
            individual tree to update their current status Giving you the tips
            and tricks you need to be successful with a species overview,
            accessible from the quick tree view
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://images.ctfassets.net/3s5io6mnxfqz/3Ey7y0u3X7BflSwkH9PeIB/258665d94bf642d83793921eeeac587c/AdobeStock_373517453.jpeg?fm=jpg&w=900&fl=progressive'
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3 className='textbackground'>Second slide label</h3>
          <p className='textbackground'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://media.npr.org/assets/img/2020/02/11/japanese-black-pine_wide-ab15e576adb464a62938ef0f2328312ebb01519d.jpg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3 className='textbackground'>Third slide label</h3>
          <p className='textbackground'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
export default Carousel
