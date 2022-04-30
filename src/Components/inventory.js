import TreeCard from './TreeCard'
import { useState, useEffect } from 'react'
import './style.css'

const Inventory = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const callBackendAPI = async () => {
      const response = await fetch('https://i-bonsai-server.herokuapp.com/inventory')
      const body = await response.json()
      setData(body)
    }
    callBackendAPI()
  }, [])

  return (
    <div id='cardwrap' className='my-5'>
      {data.map((tree) => (
        <TreeCard key={tree._id} tree={tree} />
      ))}
    </div>
  )
}

export default Inventory
