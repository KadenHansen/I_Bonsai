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
        src={props.data.Image}
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
