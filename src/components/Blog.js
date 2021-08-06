import React, { Component } from 'react';
import BlogItem from './BlogItem'
import axios from 'axios';



export class Blog extends Component {
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

export default Blog;
