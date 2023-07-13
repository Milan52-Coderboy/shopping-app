import React from 'react'
import { FaSearchLocation, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='footer-bg'>
            <div className='mx-4 d-flex pt-5'>
                <div className='text-bg me-4 w-25'>
                    <div className='d-flex mb-2 align-items-center'>
                        <img src="./icons/icons8-duolingo-logo-100.svg" alt="logo" />
                        <h1 className='m-0 fw-bolder '>OFFR</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti fugiat tenetur sed rerum commodi quos!</p>
                    <h4>Follow Us</h4>
                    <div className='d-flex'>
                        <  FaFacebook fontSize={30} className='me-3' />
                        <FaTwitter fontSize={30} className='me-3' />
                        <FaInstagram fontSize={30} className='me-3' />
                    </div>

                </div>




                <div className='text-bg me-4'>
                    <h5 className='fw-bolder mb-3'>Company</h5>
                    <ul className='p-0 opacity-75' style={{ listStyleType: 'none' }}>
                        <li className='my-2'>About us</li>
                        <li className='my-2'>Delivery Information</li>
                        <li className='my-2'>Privacy Policy</li>
                        <li className='my-2'>Terms & Conditions</li>
                        <li className='my-2'>Contact Us</li>
                        <li className='my-2'>FAQ</li>
                    </ul>
                </div>
                <div className='text-bg me-4'>
                    <h5 className='fw-bolder mb-3'>Account</h5>
                    <ul className='p-0 opacity-75' style={{ listStyleType: 'none' }}>
                        <li className='my-2'>Sign In</li>
                        <li className='my-2'>View Cart</li>
                        <li className='my-2'>My Wishlist</li>
                        <li className='my-2'>Track My Order</li>
                        <li className='my-2'>Help Ticket</li>
                        <li className='my-2'>Shipping Details</li>
                        <li className='my-2'>Compare Products</li>
                    </ul>
                </div>
                <div className='text-bg me-4'>
                    <h5 className='fw-bolder mb-3'>Corporate</h5>
                    <ul className='p-0 opacity-75' style={{ listStyleType: 'none' }}>
                        <li className='my-2'>Becomes A Merchant</li>
                        <li className='my-2'>Becomes A Rider</li>
                        <li className='my-2'>Foodelivery Business</li>
                        <li className='my-2'>Foodelivery Careers</li>
                        <li className='my-2'>Our Suppliers</li>
                        <li className='my-2'>Accessibility</li>
                        <li className='my-2'>Promotions</li>
                    </ul>
                </div>
                <div className='text-bg me-4'>
                    <h5 className='fw-bolder mb-3'>Address</h5>
                    <ul className='p-0 opacity-75 fs-5' style={{ listStyleType: 'none' }}>
                        <li className='my-2'><FaSearchLocation className='me-2' />Listen Farm, listeen lane,<br />headlry, GU35 85D, UK</li>
                        <li className='my-2'><FaPhone className='me-2' />0250 0960 1504</li>
                        <li className='my-2'><FaEnvelope className='me-2' />info@fooddelivery.com</li>
                        <li className='my-2'><FaClock className='me-2' />10:00 - 18:00, Mon - Sat</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
