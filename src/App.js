import React, { Fragment } from 'react'
import NavigationBar from './Components/Navbar'
import SlideShow from './Components/Carousel'
import Inventory from './Components/inventory'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import NewTreeForm from './Components/new_tree_form'
import TreeView from './Components/TreeView/TreeView'

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
          <Route
            exact
            path='/'
            element={
              <Fragment>
                <SlideShow />
                <NewTreeForm />
              </Fragment>
            }
          />
          <Route path='/Inventory' element={<Inventory />} />
          <Route path='/inventory/:treeId' element={<TreeView />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
