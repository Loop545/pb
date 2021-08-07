import React, { Component } from 'react'
import Img from '../static/img/about2.jpg';
import Header from '../static/graphics/background.png'
import { Link } from 'raviger';
import Typing from 'react-typing-animation';
import './Home.scss'
import FeaturedPost from '../components/featuredpost/FeaturedPost';

const Home = () => {
    return (
        <>
            <div className='header' >
                <div className='about'>
                <h2>Hi, I am </h2><Typing><h2>Pradip Bhandari</h2>
                <Typing.Delay ms={1000} /> 
                <p>and a stardust.<br/>
                        Coming from a land of Buddha;<br/>
                        I long for opening my find, freeing it into to the world of fantasy.
                        <br/>                 		
                        How great it is to live in a fantasy.
                        </p>
                        <h1>WELCOME!!!</h1>
                        <Typing.Reset count={1} delay={500} />
                </Typing>
                </div>
                {/* <img src={Header} alt='waves'/> */}
                {/* <div className='card-flex'>
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
                </div> */}
            </div> 
            
            <div className='home-container'>
                <div className='divider'/>
                <h1>About Author</h1>
                <div className='about-content'>
                    <div className='image'>
                        <img src={Img} alt='img'></img>
                    </div>
                    
                    <div className='content'>
                        <h1>Hi, I am Pradip Bhandari</h1><p> and a stardust.<br/>
                        Coming from a land of Buddha;<br/>I long for opening my find, freeing it into to the world of fantasy.<br/>                 		
                        How great it is to live in a fantasy.
                        </p>
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