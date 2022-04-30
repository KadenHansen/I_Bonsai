// dependancies
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// component imports
import NavigationBar from './Components/Navbar'
import SlideShow from './Components/Carousel'
import Inventory from './Components/inventory'
import NewTreeForm from './Components/new_tree_form'
import TreeView from './Components/TreeView/TreeView'

const App = () => {

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
