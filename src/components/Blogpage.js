import React, { Component, Fragment } from 'react';
import { Link, navigate } from 'raviger';
import axios from 'axios';

export class Blogpage extends Component {
    state = {
        blog: {},
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`/wp-json/wp/v2/blog/${this.props.match.id}`)
        .then(res => this.setState({
            blog: res.data,
            isLoaded: true
        }))
        .catch(err=> console.log(err));
    }
    render() {
        const { blog, isLoaded } = this.state;
        if(isLoaded) {
            return (
                <Fragment>
                    <Link navigate='/blog'>Go Back</Link>
                    <hr />
                    <h1>{ blog.title.rendered }</h1>
                    <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }}></div>
                    <h4>Publisher: { blog.acf.author }</h4>
                </Fragment>
            )
        }
        return <h3>Loading...</h3>
    }
}

export default Blogpage;

