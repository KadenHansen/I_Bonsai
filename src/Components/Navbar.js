import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Homepage';
import Inventory from './Inventory';
const NavigationBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
        <Container>
          
      <img
        src="Images/logo.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
        <Navbar.Brand href='#home'>IbonsaI</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link to="/">Home</Link>
            <Link to="/Inventory">Inventory</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  
    </Navbar>
    
  )
}

export default NavigationBar
