import React, { useEffect } from 'react'
import NavigationBar from './Components/Navbar'

function App() {
  // useEffect(() => {
  //   const callBackendAPI = async () => {
  //     const response = await fetch('http://localhost:5000/')
  //     const body = await response.json()
  //     console.log(body)
  //   }
  //   callBackendAPI()
  // }, [])

  return (
    <>
      <NavigationBar />
    </>
  )
}

export default App
