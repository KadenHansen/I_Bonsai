import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Profile = (props) => {
  const link = `edit`
  return (
    <Container>
      <img
        className='rounded mt-5'
        width='150px'
        alt='Your Bonsai Tree'
        src='https://www.thespruce.com/thmb/0AJv8AfVaT09o4oLhofX_WR_d-Y=/3024x3022/filters:no_upscale():max_bytes(150000):strip_icc()/Bonsai-Juniper-Tree_GettyImages-1191078639-c86fffdd513648b6b2ee0d658710bc7d.jpg'
      />
      <div className='font-weight-bold'>{props.data.Name}</div>
      <div className='text-black-50'>{props.data.Species}</div>
      <Link to={link}>
        <Button variant='primary'>Edit Tree</Button>
      </Link>
      <Button variant='danger'>Delete Tree</Button>
    </Container>
  )
}

export default Profile
