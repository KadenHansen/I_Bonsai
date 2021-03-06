import { React, useState } from 'react'
// import ReactDOM from 'react-dom/client';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function NewTreeForm() {
  const [tree, setTree] = useState({
    Name: '',
    Species: '',
    Age: 0,
    Style: '',
    Image: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setTree((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(tree)
    const res = await fetch('https://i-bonsai-server.herokuapp.com/inventory', {
      method: 'POST',
      body: JSON.stringify({
        Name: tree.Name,
        Age: tree.Age,
        Species: tree.Species,
        Style: tree.Style,
        Image: tree.Image,
      }),
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    })
    await res.json().then(view => {
      window.location.href = view.redirect
  })
  }

  return (
    <div>
      <Form action='/' method='POST' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='Name'>
          <Form.Label>Bonsai Name</Form.Label>
          <Form.Control
            value={tree.Name}
            type='text'
            placeholder='Enter bonsai name'
            onChange={handleChange}
            name='Name'
          />
          <Form.Text className='text-muted'>
            This can be changed later
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='Species'>
          <Form.Label>Species</Form.Label>
          <Form.Control
            value={tree.Species}
            type='text'
            placeholder='Enter Species name'
            onChange={handleChange}
            name='Species'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='Age'>
          <Form.Label>Age</Form.Label>
          <Form.Control
            value={tree.Age}
            type='Number'
            placeholder='Enter Age'
            onChange={handleChange}
            name='Age'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='Style'>
          <Form.Label>Style</Form.Label>
          <Form.Control
            value={tree.Style}
            type='text'
            placeholder='Enter Style'
            onChange={handleChange}
            name='Style'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='Image'>
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            value={tree.Image}
            type='text'
            placeholder='Enter image URL'
            onChange={handleChange}
            name='Image'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default NewTreeForm
