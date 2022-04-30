import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Profile from './Profile'
import { useParams } from 'react-router-dom'
import EditTreeForm from '../EditTreeForm'

const TreeBanner = () => {
  const { treeId } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    const callBackendAPI = async () => {
      const response = await fetch(`https://i-bonsai-server.herokuapp.com/inventory/${treeId}`)
      const body = await response.json()
      setData(body)
    }
    callBackendAPI()
  }, [])

  return (
    <Container className='my-3'>
      <Profile data={data} />
      <EditTreeForm />
    </Container>
  )
}

export default TreeBanner
