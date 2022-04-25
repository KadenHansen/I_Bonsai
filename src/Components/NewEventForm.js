import { React, useState } from 'react'
// import ReactDOM from 'react-dom/client';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function NewEventForm() {
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
                <Form>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="event"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="event2"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                                 <Form.Check
                                inline
                                label="event3"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />

                        </div>
                    ))}
                </Form>
                <Form.Group className="mb-3" controlId="formTreeName">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder="Enter bonsai description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date Potted</Form.Label>
                    <Form.Control type="date" placeholder="select potting date" />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="upload photo" />
                </Form.Group> */}
                <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control type="file" size="sm" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEventTextArea">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder="enter notes" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Save Events
                </Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default NewEventForm;