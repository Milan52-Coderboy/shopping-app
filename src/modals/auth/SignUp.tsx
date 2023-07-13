import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function SignUp(props: any) {
    return (
        <>
            <Modal show={props.show} onHide={props.onHide} centered >
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='d-flex mb-3'> 
                            <Form.Group className="me-2 w-50" >
                                <Form.Control
                                    type="text"
                                    placeholder="First Name"
                                />
                            </Form.Group>
                            <Form.Group className=" w-50" >
                                <Form.Control
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="email"
                                placeholder="Email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="number"
                                placeholder="Mobile No."
                            />
                        </Form.Group>
                        <div className='d-flex mb-3'> 
                        <Form.Group className="w-50 me-2" >
                            <Form.Control
                                type="number"
                                placeholder="Age"
                            />
                        </Form.Group>
                        <Form.Group className="w-50" >
                            <Form.Control
                                type="date"
                                placeholder="Date Of Birth"
                            />
                        </Form.Group>
                        </div>
                        
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="text"
                                placeholder="Address"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="number"
                                placeholder="Zipcode"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="text"
                                placeholder="City"
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="text"
                                placeholder="State"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="text"
                                placeholder="Country"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.onHide}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
//firstname, lastname, email(optional), gender, 
//age,date of birth, mobile,city, postcode, state, countyr
//password

