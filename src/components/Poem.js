import React, { Component } from 'react';
import PoemItem from './PoemItem'
import axios from 'axios'


export class Poem extends Component {
    state = {
        poems: [],
        isLoaded: false
    }
    componentDidMount() {
        axios.get('/wp-json/wp/v2/poem')
        .then(res => this.setState({
            poems: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }
    render() {
        const { poems,  isLoaded } = this.state;
        if(isLoaded) {
            return (
                <div>
                   {poems.map(poem => (
                       <PoemItem key={poem.id}blog={poem} />
                   ))} 
                </div>
            );
        }
        return <h3>Loading...</h3>
    }
}

export default Poem;
