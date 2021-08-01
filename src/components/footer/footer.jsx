import React from 'react';
import { AiFillInstagram, AiFillTwitterSquare, AiFillFacebook } from 'react-icons/ai';


import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer-container'>
            <section class="legal">
                <ul class="legal-list">
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li>&copy; 2021 Copyright Freddy.</li>
                </ul>
            </section>
            <div className='social-container'>
                <a className='icons' href='www.google.com'> <AiFillFacebook className='icons' size='2rem'/></a>     
                <a className='icons' href='www.google.com'> <AiFillInstagram className='icons' size='2rem'/></a>
                <a className='icons' href='www.google.com'> <AiFillTwitterSquare className='icons' size='2rem'/></a>
            </div>
        </div>
    )
}
export default Footer;