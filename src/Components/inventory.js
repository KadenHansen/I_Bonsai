import TreeCard from './TreeCard'
import { useState, useEffect } from 'react'
import './style.css'

const Inventory = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const callBackendAPI = async () => {
      const response = await fetch('http://localhost:5000/inventory')
      const body = await response.json()
      setData(body)
    }
    callBackendAPI()
  }, [])

  return (
    <div id='cardwrap'>
      {data.map((tree) => (
        <TreeCard tree={tree} />
      ))}
    </div>
  )
}


export default Inventory
