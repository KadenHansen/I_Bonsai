import { React, useState } from 'react'
// import ReactDOM from 'react-dom/client';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function NewTreeForm() {
    const [tree, setTree] = useState({ Name: "", Species: "", Age: 0, Style: "" });
    const handleChange = e => {
        const { name, value } = e.target;
        setTree(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        console.log(tree);
        e.preventDefault();
    }
    return (
        <div>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formTreeName">
                    <Form.Label>Bonsai Name</Form.Label>
                    <Form.Control
                        value={tree.Name}
                        type="text"
                        placeholder="Enter bonsai name"
                        onChange={handleChange}
                        name="Name"
                    />                    
                    <Form.Text className="text-muted">
                        This can be changed later
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Species</Form.Label>
                    <Form.Control
                        value={tree.Species}
                        type="text"
                        placeholder="Enter Species name"
                        onChange={handleChange}
                        name="Species"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        value={tree.Age}
                        type="Number"
                        placeholder="Enter Age"
                        onChange={handleChange}
                        name="Age"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Style</Form.Label>
                    <Form.Control
                        value={tree.Style}
                        type="text"
                        placeholder="Enter Style"
                        onChange={handleChange}
                        name="Name"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default NewTreeForm;