import React, { Component } from 'react';
import { Link } from 'raviger';
import PropTypes from 'prop-types';
import axios from 'axios';
import './BlogItem.scss'

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
                <div classname='blog-card' style={{
                    padding: '1rem',
                    marginBottom: '2rem',
                    backgroundColor: 'white',
                    display: 'block',
                    borderRadius: '10px',
                    boxShadow: '0 1px 3px rgb(15 15 15 / 23%)'
                    }}>
                    <h2  classname='title' style={{marginBottom: '10px'}}>{ title.rendered }</h2>
                    <div className='blog-flexbox' style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        }}>
                        <img className='blog-img' style={{width: '20%'}} src={ imgUrl } alt={title.rendered} />
                        <br/>
                        <div  className='blog-text' style={{
                            width: '90%',
                            marginLeft: '20px'

                            }} dangerouslySetInnerHTML ={{ __html: excerpt.rendered }} 
                        />
                    </div>
                    <div style={{marginTop: '2rem'}} >
                        <small>Review by: <strong style={{textTransform: 'capitalize'}}>{ author }</strong></small>
                    </div>
                    <a className='blog-button'><Link className='a-text' href={`/blog/${id}`}>Read More</Link></a>
                </div>
            );
        } 
        return null;
    }
}

export default BlogItem
