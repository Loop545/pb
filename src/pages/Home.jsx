import React, { Component } from 'react'
import Img from '../static/img/about2.jpg';
import Header from '../static/img/header.jpg'
import { Link } from 'raviger';

import './Home.scss'
// import Wave from '../static/graphics/wave.svg'
import FeaturedPost from '../components/featuredpost/FeaturedPost';

const Home = () => {
    return (
        <>
        <div className='header' >
            <img src={Header} alt='waves'/>
        
            <div className='card-flex'>
                <div className='card-1'>
                    <h2>Poems</h2>
                    <button>Read more</button>
                </div>
                <div className='card-2'>
                    <h2>Blog</h2>
                    <button>Read more</button>
                </div>
                <div className='card-3'>
                    <h2>Social</h2>
                    <button>Read more</button>    
                </div>
            </div>
        </div> 
        
        <div className='home-container'>
            
            <div className='divider' />
                <h1>About Author</h1>
                <img src={Img} alt='img'></img>
                <div className='about-content'>
                    <div className='content'>
                    <p>You will also see introductions on websites that promote software and applications. In these cases, the introduction gives quick information about the software, explaining what it does and its top features. These introductions almost always include a graphical element of some sort, usually an illustration or logo for the software, but sometimes screenshots in the case of Web applications. Directly below that, you will often find a button or two linking to the download or purchase page.
                    Here’s a website for a Web application that includes an introduction. The first thing you see is the large typography, which immediately grabs the user. The user sees this first, then their eye is guided to the sentence below, which provides more information. Next are two buttons: one for a tour, which gives the user more information, and the other to sign up. You can’t see it in the screenshot, but an illustration is next to the text that grabs and intrigues the user visually.</p>
                    <Link href='/about'>
                        <button  label='more' >
                        Learn More</button>
                    </Link>
                </div>      
            </div>
            
        </div>
        <div className='wave'/>
        <div className='divider' />
        <div className='featured-post'>
            <h1>Post of the day.</h1>
            <FeaturedPost />
        </div>
        </>
    )
}
export default Home;