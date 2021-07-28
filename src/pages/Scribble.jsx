import React, { Component } from 'react'
import axios from 'axios'
import BlogItem from '../components/BlogItem'

import './Scribble.scss'

export class Scribble extends Component{

    state = {
        blogs: [],
        isLoaded: false
    }
    componentDidMount() {
        axios.get('/wp-json/wp/v2/blog')
        .then(res => this.setState({
            blogs: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }
    render() {
        const { blogs,  isLoaded } = this.state;
        if(isLoaded) {
            return (
                <div>
                   {blogs.map(blog => (
                       <BlogItem key={blog.id}blog={blog} />
                   ))} 
                </div>
            );
        }
        return <h3>Loading...</h3>
    }
}
export default Scribble;