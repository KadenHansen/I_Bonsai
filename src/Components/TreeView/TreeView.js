import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Profile from './Profile'
import { useParams } from 'react-router-dom'

const TreeBanner = () => {
  const { treeId } = useParams()
  console.log(treeId)

  const [data, setData] = useState([])
  useEffect(() => {
    const callBackendAPI = async () => {
      const response = await fetch(`http://localhost:5000/inventory/${treeId}`)
      const body = await response.json()
      setData(body)
    }
    callBackendAPI()
  }, [])

  return (
    <Container className='my-3'>
      <Row>
        <Col className='border-end'>
          <Profile data={data} />
        </Col>
        <Col
          xs={6}
          style={{ minHeight: '100vh' }}
          className='border-start border-end'
        >
          {/* Display all tree events here */}
        </Col>
        <Col className='border-start'>{/* Display species info here */}</Col>
      </Row>
    </Container>
  )
}

export default TreeBanner
