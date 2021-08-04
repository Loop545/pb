import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'raviger';

import './FeaturedPost.scss'


export class FeaturedPost extends Component {

    state = {
        specials: [],
        isLoaded: false
    }
    componentDidMount() {
        axios.get('/wp-json/wp/v2/special')
        .then( res => this.setState({
            specials: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }
    render() {
        console.log(this.setState)
        const { id,specials, isLoaded } = this.state;
        if(isLoaded) {
            return (
                <div className='featured-post-container'>
                    {specials.map(special => (
                        <div className='featured-post-card'>
                        <h2>{ special.title.rendered }</h2>
                        <div dangerouslySetInnerHTML ={{ __html: special.excerpt.rendered }} />
                        <Link href='/scribble'>
                                <button class='read-more'  label='more' >
                                Read more</button>
                        </Link>
                        </div>
                    ))}
                </div>
            );
            
        }
        return null;
        
    }
}

export default FeaturedPost
