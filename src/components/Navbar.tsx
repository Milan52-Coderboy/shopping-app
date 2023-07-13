import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaLanguage, FaBell } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { languages } from '@/common/utility';
import { Dropdown } from 'react-bootstrap';
import dynamic from 'next/dynamic'
import { BsFillGearFill, BsFillLightningFill } from "react-icons/bs";

const SignUp = dynamic(() => import('../modals/auth/SignUp'), { ssr: false })
const Login = dynamic(() => import('../modals/auth/Login'), { ssr: false })


export default function TopNavbar() {
    const [signUpModalShow, setSignUpModalShow] = useState(false);
    const [loginModalShow, setLoginModalShow] = useState(false);

    return (
        <>
            <Navbar fixed='top' collapseOnSelect expand="lg" bg="bg" variant="bg" className='py-0 nav-style' >
                <Container>
                    <Navbar.Brand href="/" className='fw-bold fs-4 foodeliver-color'><img src="./icons/icons8-duolingo-logo-100.svg" alt="logo" />OFFR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='fw-semibold'>
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="./shop">Shop</Nav.Link>
                            <Nav.Link href="/service">Service</Nav.Link>
                            <NavDropdown title="Offer" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/offer">Offer 1</NavDropdown.Item>
                                <NavDropdown.Item href="/offer">Offer 1</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/booking">Booking</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                        <Nav className='align-items-center '>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='p-1'>
                                    <FaLanguage size={30} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='overflow-auto' style={{ maxHeight: "200px" }}>
                                    {
                                        languages.map((x, i) => {
                                            return (
                                                <>
                                                    <Dropdown.Item style={{ fontSize: "14px" }} key={i}>{x}</Dropdown.Item>
                                                </>
                                            )
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* ===========if no logn ============ */}
                            {/* <Nav.Link>
                                <Button variant='outline-primary' onClick={() => setLoginModalShow(true)}>
                                    Login
                                </Button>
                            </Nav.Link>
                            <Nav.Link>
                                <Button variant='outline-primary' onClick={() => {
                                    setSignUpModalShow(true)
                                }}>
                                    Sign up
                                </Button>
                            </Nav.Link> */}
                            {/* =========if login ========== */}
                            <Nav.Link href='/upgrad'>
                                <Button variant='primary' size='sm'>
                                    <BsFillLightningFill />
                                    upgrad
                                </Button>
                            </Nav.Link>
                            <Nav.Link href='/setting' className='d-flex'>
                                < BsFillGearFill size={20} />
                            </Nav.Link>
                            <Nav.Link href='/notification' className='d-flex'>
                                <FaBell size={20} />
                            </Nav.Link>
                            <Nav.Link>
                                {/* ============if no image================== */}
                                {/* <Button variant='primary' className='rounded-circle p-2'>
                                    <div className='fw-bolder fs-5'>MD</div>
                                </Button> */}
                                {/* =========if image ============== */}
                                <div className='rounded-circle overflow-hidden navbar-user-img'>
                                    <img className='w-100 h-100' src="./imgs/myImages/milan.png" alt="my image" />
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <SignUp show={signUpModalShow} onHide={() => setSignUpModalShow(false)} />
            <Login show={loginModalShow} onHide={() => setLoginModalShow(false)} />

        </>
    )
}
