import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

export class BlogItem extends Component {

    state ={
        imgUrl: '',
        author: '',
        isLoaded:false
    }

    static propTypes ={
       blog: PropTypes.object.isRequired 
    }

    componentDidMount() {
        const { featured_media, author} = this.props.blog;
        const getImageUrl = axios.get(`/wp-json/wp/v2/media/${featured_media}`)
        const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`)

        Promise.all([getImageUrl,getAuthor]).then(res => {
            console.log(res);
            this.setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,
                author: res[1].data.name,
                isLoaded: true
            });
        });
    }

    render() {
        const { id, title, excerpt} = this.props.blog;
        const { author, imgUrl, isLoaded} = this.state;
        if(isLoaded) {
            return (
                <div>
                    <h2 style={{marginBottom: '0'}}>{ title.rendered }</h2>
                    <small>Review by <strong>{ author }</strong></small>
                    <img style={{width: '50%'}} src={ imgUrl } alt={title.rendered} />
                    <div dangerouslySetInnerHTML ={{ __html: excerpt.rendered }} />
                    {/* <Link to={`/blog/${id}`}>Read More</Link> */}
                    < hr />
                </div>
            );
        } 
        return null;
    }
}

export default BlogItem
