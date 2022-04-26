import React from 'react'
import Card from 'react-bootstrap/Card'
import './style.css'
import { useState } from 'react'

const TreeCard = (props) => {
  // consol.log the data for each card
  console.log(props.tree)

  return (
    <div id='cardwrap'>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant='top'
          src='https://www.thespruce.com/thmb/0AJv8AfVaT09o4oLhofX_WR_d-Y=/3024x3022/filters:no_upscale():max_bytes(150000):strip_icc()/Bonsai-Juniper-Tree_GettyImages-1191078639-c86fffdd513648b6b2ee0d658710bc7d.jpg'
        />
        <Card.Body>
          {/* Replace Tree Name with db tree.name */}
          <Card.Title>{props.tree.Name}</Card.Title>
          {/* Replace Species with db tree.name */}
          <Card.Subtitle className='mb-2 text-muted'>
            {props.tree.Species}
          </Card.Subtitle>
          {/* Replace Owner's Username with db owner.username */}
          <Card.Subtitle className='text-muted'>
            {props.tree.Style}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TreeCard
