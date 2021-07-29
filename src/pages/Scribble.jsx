import React, { Component } from 'react'

import Blog from '../components/Blog'
import Poem from '../components/Poem'

import './Scribble.scss'

const Scribble = () => {
    return (
        <div className='blog-container'>
            <h1>Blogs</h1>
            <Blog />
            {/* <Poem /> */}
        </div>
    );
}
export default Scribble;


// import axios from 'axios'
// import BlogItem from '../components/BlogItem'
// let one = '/wp-json/wp/v2/blog';
// let two = '/wp-json/wp/v2/poem';

// const requestOne = axios.get(one)
// const requestTwo = axios.get(two);

// export class Scribble extends Component{

//     state = {
//         blogs: [],
//         isLoaded: false
//     }
//     componentDidMount() {
//         axios.all([requestOne, requestTwo], {
//             params: {
//                 _limit: 2
//             }
//         })
//         .then(axios.spread((...responses) => {
//             const responseOne = responses[0];
//             const responseTwo = responses[1];
//             console.log(responseOne, responseTwo);
       
//             responseOne => this.setState({
//                 blogs: responseOne.data,
//                 isLoaded: true
//             })
//         }),
//         )
//         //     res => this.setState({
//         //     blogs: res.data,
//         //     isLoaded: true
//         // }))
//         .catch(err => console.log(err));
//     }
//     render() {
//         const { blogs,  isLoaded } = this.state;
//         if(isLoaded) {
//             return (
//                 <div>
//                    {blogs.map(blog => (
//                        <BlogItem key={blog.id}blog={blog} />
//                    ))} 
//                 </div>
//             );
//         }
//         return <h3>Loading...</h3>
//     }
// }
// export default Scribble;