import React, { Component } from 'react'

import './Comingsoon.scss'

import logo from '../svg/logo.svg'

export class Comingsoon extends Component {
    render() {
        return (
            <>
            <div className="info-container">
                <img src={logo} alt='logo'></img>
                <p>This space will be filled with something beautiful soon..</p>
                <button className='learnmore-btn' onClick={() => window.location = 'https://www.linkedin.com/in/pranab-raj-amatya-6615901a2/'}>Learn More</button>
            </div>
            <div className='footer-container'>
             <a href="mailto:amatyap2@gmail.com">amatyap2@gmail.com</a> | &copy; 2021 Pranab Amatya
            </div>
            </>
        )
    }
}

export default Comingsoon
