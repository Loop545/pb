import React, { Component } from 'react'

import Blog from '../components/Blog'

import './Blog.scss'

const Blogs = () => {
    return (
        <div className='blog-container'>
            <h1>Blogs</h1>
            <Blog />
        </div>
    );
}
export default Blogs;


