// dependancies
import React, { Fragment } from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// component imports
import NavigationBar from './Components/Navbar'
import SlideShow from './Components/Carousel'
import Inventory from './Components/inventory'
import NewTreeForm from './Components/new_tree_form'
import EditTreeForm from './Components/EditTreeForm'
import TreeView from './Components/TreeView/TreeView'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const callBackendAPI = async () => {
      const response = await fetch('http://localhost:5000/')
      const body = await response.json()
      setData(body)
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
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/inventory/:treeId' element={<TreeView />} />
          <Route path='/inventory/new' element={<NewTreeForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
