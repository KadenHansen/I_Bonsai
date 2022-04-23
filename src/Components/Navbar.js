import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavigationBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <img
          src='Images/logo.png'
          width='50'
          height='50'
          className='d-inline-block align-top'
          alt='React Bootstrap logo'
        />
        <Navbar.Brand href='/'>IbonsaI</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {/* <Link to="/">Home</Link>
            <Link to="/Inventory">Inventory</Link> */}
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/Inventory'>Inventory</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
