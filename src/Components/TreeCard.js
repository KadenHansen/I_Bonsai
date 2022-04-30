import React from 'react'
import Card from 'react-bootstrap/Card'
import './style.css'
import { Link } from 'react-router-dom'

const TreeCard = (props) => {
  // make the button link to the TreeView page
  const link = `${props.tree._id}`

  let image = `https://source.unsplash.com/random/900×700/?tree`

  if (props.tree.Image) {
    image = props.tree.Image
  }

  return (
    <div id='cardwrap'>
      <Link to={link} style={{ textDecoration: 'none', boxShadow: '3px 3px 10px #3d3d3d' }}>
        <Card style={{ width: '18rem', height: '100%' }}>
          <Card.Img variant='top' src={image} className='card-image-top' />
          <Card.Body>
            <Card.Title>{props.tree.Name}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              Species: {props.tree.Species}
            </Card.Subtitle>
            <Card.Subtitle className='mb-2 text-muted'>
              {props.tree.Age} years old
            </Card.Subtitle>
            <Card.Subtitle className='mb-2 text-muted'>
              Style {props.tree.Style}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Link>
    </div>
  )
}

export default TreeCard
