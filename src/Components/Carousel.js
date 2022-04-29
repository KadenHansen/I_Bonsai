import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './style.css'

// make the tree view button link to the tree view page

function SlideShow() {
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
            Keep track of your bonsai tree inventory using a quick view of all of your current bonsai trees!
            Also track their individual current status using each tree's individual page!
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
          <h3 className='textbackground'>First Time Here?</h3>
          <p className='textbackground'>
            Get started by clicking the "Add a Tree" button in the Navigation Bar at the top!
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
          <h3 className='textbackground'>Already Started?</h3>
          <p className='textbackground'>
            Click the "Inventory" button in the Navigation Bar at the top to see your trees.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
export default SlideShow
