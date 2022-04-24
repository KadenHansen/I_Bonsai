import { React, useState } from 'react'
// import ReactDOM from 'react-dom/client';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function NewTreeForm() {
    // const [name, setName] = useState("");

    return (
        <div>
            {/* <form>
                <label>Enter your bonsai name:
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </form> */}
            <Form>
                <Form.Group className="mb-3" controlId="formTreeName">
                    <Form.Label>Bonsai Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter bonsai name" />
                    <Form.Text className="text-muted">
                        This can be changed later
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Species</Form.Label>
                    <Form.Control type="text" placeholder="Enter Species" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" placeholder="Enter Species" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Style</Form.Label>
                    <Form.Control type="text" placeholder="Enter Species" />
                </Form.Group>
                <Button variant="primary">
                    Add Event(s)
                </Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default NewTreeForm;