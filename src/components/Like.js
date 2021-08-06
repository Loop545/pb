import React, { Component } from 'react';

class LikeButtom extends Component {

    state = {
        likes:0
    };

    addLike = () => {
        let newCount = this.state.likes +1;
        this.setState({
            likes: newCount
        });
    };
 
    render() {
        return <button onClick={this.addLike}> buttton: {this.state.likes} </button>
    }
}

export default LikeButtom