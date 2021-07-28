import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Poempage extends Component {
    state = {
        poem: {},
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`/wp-json/wp/v2/poem/${this.props.match.params.id}`)
        .then(res => this.setState({
            poem: res.data,
            isLoaded: true
        }))
        .catch(err=> console.log(err));
    }
    render() {
        const { poem, isLoaded } = this.state;
        if(isLoaded) {
            return (
                <Fragment>
                    <Link to='/'>Go Back</Link>
                    <hr />
                    <h1>{ poem.title.rendered }</h1>
                    <div dangerouslySetInnerHTML={{ __html: poem.content.rendered }}></div>
                    <h4>Publisher: { poem.acf.author }</h4>
                </Fragment>
            )
        }
        return <h3>Loading...</h3>
    }
}

export default Poempage;

