import React from 'react'
import NavigationBar from './Components/Navbar'
import SlideShow from './Components/Carousel'
import Inventory from './Components/Inventory'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

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
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path='/' element={<SlideShow />} />
          <Route path='/Inventory' element={<Inventory />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
