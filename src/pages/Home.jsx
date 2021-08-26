import React, { Component } from 'react'
import Img1 from '../static/img/card1.jpg';
import Img2 from '../static/img/card2.jpg';
import Header from '../static/graphics/background.png'
import { Link } from 'raviger';
import Typing from 'react-typing-animation';
import './Home.scss'
import FeaturedPost from '../components/featuredpost/FeaturedPost';

const Home = () => {
    return (
        <div className='container'>
            <section className='header' >
             <div className='one'>
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
            </section> 
            <section className='home-container'>
                <div className='two'>
                    <div className='grid-1'>
                        {/* <div className='divider'/>
                        <h1>About Author</h1> */}
                        <div className='about-content'>
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
                    <div className='grid-2'>
                        <div className='image'>
                            <img src={Img1} alt='img'></img>
                        </div>
                    </div>
                    {/* <div className='grid-3'>
                        <div className='image'>
                            <img src={Img2} alt='img'></img>
                        </div>
                    </div>
                    <div className='grid-4'>
                        <h1> hey</h1>
                    </div> */}
                </div>
                
            </section>
            <section className='wave'/>
            <section className='featured'>
                    <div className='three'>
                    <div className='divider' />
                    <div className='featured-post'>
                        <h1>Post of the day.</h1>
                        <FeaturedPost />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;





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