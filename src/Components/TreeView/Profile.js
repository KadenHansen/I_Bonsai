import React from 'react'
import Container from 'react-bootstrap/Container'

const Profile = () => {
  return (
      <Container>
        <img className="rounded mt-5" width="150px" alt="Your Bonsai Tree" src="https://www.thespruce.com/thmb/0AJv8AfVaT09o4oLhofX_WR_d-Y=/3024x3022/filters:no_upscale():max_bytes(150000):strip_icc()/Bonsai-Juniper-Tree_GettyImages-1191078639-c86fffdd513648b6b2ee0d658710bc7d.jpg" />
        <div className="font-weight-bold">Tree Name</div>
        <div className="text-black-50">Tree Species</div>
      </Container>
  )
}

export default Profile
