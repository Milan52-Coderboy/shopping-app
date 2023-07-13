import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Login(props: any) {
    return (
        <>
            <Modal show={props.show} onHide={props.onHide} centered >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="number"
                                placeholder="Mobile"
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


