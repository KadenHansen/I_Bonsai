import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './style.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

const TreeCard = (props) => {
  // make the button link to the TreeView page
  const link = `${props.tree._id}`
  const treeID = props.tree._id

  return (
    <div id='cardwrap'>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant='top'
          src='https://source.unsplash.com/random/900×700/?tree'
        />
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
          {/* button that links to tree view, routes to display tree view component */}
          {/* setup routes to render TreeView component  */}
          <Link to={link}>
            <Button variant='primary'>View Tree</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TreeCard
