import React, {} from 'react'
import NavigationBar from './Components/Navbar'
import Home from './Components/Homepage'
import { useEffect } from 'react'
function App() {
  useEffect(() => {
    const callBackendAPI = async () => {
      const response = await fetch('http://localhost:5000/')
      const body = await response.json()
      console.log(body)
    }
    callBackendAPI()
  }, [])

  return (
    <>
      <NavigationBar />
      <Home/>
    </>
  )
}

export default App
