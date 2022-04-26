import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Profile from './Profile'

const TreeBanner = () => {
  return (
    <Container className='my-3'>
        <Row>
          <Col className="border-end">
            {/* Display Tree Profile here */}
          </Col>
          <Col xs={6} style={{minHeight: "100vh"}} className='border-start border-end'>
            {/* Display all tree events here */}
          </Col>
          <Col className="border-start">
            {/* Display species info here */}
          </Col>
        </Row>
    </Container>
  )
}

export default TreeBanner
