import React from 'react';
import './popup.scss';
import axios from 'axios';

class Popup extends React.Component {
        state = {
            blogs: [],
            isLoaded: false,
        }
        componentDidMount() {
            axios.get(`/wp-json/wp/v2/blog/${this.props.id}`)
            .then(res => this.setState({
                blog: res.data,
                isLoaded: true
            }))
            .catch(err=> console.log(err));
        }
    render() {
        console.log(this.setState)
        const { blog, isLoaded } = this.state;
        if(isLoaded) {
            return (
                <div className='popup'>
                    <div className='popup_inner'>
                        <h1>{ blog.title.rendered }</h1>
                        <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }}></div>
                        <h4>Publisher: { blog.acf.author }</h4>
                        <button onClick={this.props.closePopup}>close me</button>
                    </div>
                </div>   
            );
        }
        return null;
    }
}
export default Popup;