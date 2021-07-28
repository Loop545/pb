import React, { Component } from 'react'

import Img from '../static/img/about.jpg';
import { Link } from 'raviger';

import './Home.scss'

const Home = () => {
    return (
        <div className='home-container'>
                <div className='divider' />
                <h1>About Author</h1>
                <div className='about-content'>
                    <img src={Img} alt='img'></img>
                    <div className='content'>
                    <p>complete lunatic to what he does. But whatever he does, it good. Mind licking good.</p>
                    <Link href='/about'>
                                <button  label='more' >
                                Learn More</button>
                    </Link>
                    </div>
                </div>
        </div>
    )
}
export default Home;