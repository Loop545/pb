import React, { Component } from 'react';
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
            // this.setState({
            //     imgUrl:
            // })
        });
    }

    render() {
        const {title, excerpt} = this.props.blog;
        return (
            <div>
                <h2>{ title.rendered }</h2>
                <div dangerouslySetInnerHTML ={{ __html: excerpt.rendered }} />
            </div>
        )
    }
}

export default BlogItem
