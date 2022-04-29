import { React, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function EditTreeForm() {
    const { treeId } = useParams()
    const [data, setData] = useState([])
    
    useEffect(() => {
            const callBackendAPI = async () => {
            const response = await fetch(`http://localhost:5000/inventory/${treeId}`)
            const body = await response.json()
            setData(body)
        }
        callBackendAPI()
    }, [])
    // console.log("data", data)
    
    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(tree);
        const res = await fetch(`http://localhost:5000/inventory/${treeId}/edit`, {
            method: "PATCH",
            body: JSON.stringify({
                Name: data.Name,
                Age: data.Age,
                Species: data.Species,
                Style: data.Style,
                Image: data.Image,
            }),
            headers: {
                'content-type':'application/json'
            },
        })
        let response = await res.json().then(view => {
                window.location.href = view.redirect
            })
        
    }
    
    return (
        <div>

            <Form action='/' method="POST" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Label>Bonsai Name</Form.Label>
                    <Form.Control
                        defaultValue={data.Name}
                        type="text"
                        placeholder={data.Name}
                        onChange={handleChange}
                        name="Name"
                    />                    
                    <Form.Text className="text-muted">
                        This can be changed later
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Species">
                    <Form.Label>Species</Form.Label>
                    <Form.Control
                        defaultValue={data.Species}
                        type="text"
                        placeholder={data.Species}
                        onChange={handleChange}
                        name="Species"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        defaultValue={data.Age}
                        type="Number"
                        placeholder={data.Age}
                        onChange={handleChange}
                        name="Age"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Style">
                    <Form.Label>Style</Form.Label>
                    <Form.Control
                        defaultValue={data.Style}
                        type="text"
                        placeholder={data.Style}
                        onChange={handleChange}
                        name="Style"
                    />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="Style">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        defaultValue={data.Image}
                        type="text"
                        placeholder={data.Image}
                        onChange={handleChange}
                        name="Image"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default EditTreeForm;