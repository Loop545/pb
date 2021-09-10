import axios from 'axios'
import React, { Component} from 'react'

import './Connect.scss'

class Connect extends Component{
    constructor(props) {
        
        super(props)

        this.state = {
            yourName:'',
            yourEmail: '',
            subject: '',
            message: '',
            successMessage: '',
            loading: false,
            error: ''
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        const siteURl = 'https://localhost:7000'

        const formData = {
            'your-name': this.state.yourName,
            'your-email': this.state.yourEmail,
            'your-subject': this.state.subject,
            'your-message': this.state.message,
        }
        console.log(formData)

        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6NzAwMCIsImlhdCI6MTYyNzcyMTA1MiwibmJmIjoxNjI3NzIxMDUyLCJleHAiOjE2MjgzMjU4NTIsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.f8C3xsnhsbo62_GoZQJbmuxTIFfz3e4SGatR4PlyqsY'
        this.setState({ loading: true}, () =>{
            axios.post (`${siteURl}/wp-json/contact-form-7/v1/contact/37/feedback`,
            {formData}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then( res => {
                this.setState({loading: false, successMessage: res.data.message})
                console.warn(res.data)
            })
            .catch ( err => {
                this.setState({error: 'you have an error', loading: false})
            })
        })
    }

    handleOnChange = (event) => {
        event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
    }

    render()  {
        const { yourName, yourEmail, subject, message, successMessage} = this.state
        return (
            <div className='form-container'>
                <h1> Let's have a chat <strong>04 52 510 182</strong></h1>
                <form onSubmit={this.onFormSubmit}>
                    <label className='form-group'>
                    Name
                    <br/>
                    <input 
                        type='text'
                        className="form-control"
                        name='yourName'
                        value={yourName}
                        onChange={this.handleOnChange}
                    ></input>
                    </label>
                    <br />
                    <label className='form-group'>
                    Email
                    <br/>
                    <input 
                    type='text'
                    className="form-control"
                    name='yourEmail'
                    value={yourEmail}
                    onChange={this.handleOnChange}
                    ></input>
                    </label>
                    <br />
                    <label className='form-group'>
                    Subject
                    <br/>
                    <input 
                    type='text'
                    className="form-control"
                    name='subject'
                    value={subject}
                    onChange={this.handleOnChange}
                    ></input>
                    </label>
                    <br />
                    <label className="form-group"> Message
                    <br/>
                    <textarea 
                        type='textarea'
                        className="form-control"
                        name='message'
                        value={message} 
                        onChange={this.handleOnChange}
                        rows="1"
                    ></textarea>
                    </label>
                        <br />
                        <button type='submit' className='button-primary'>Submit</button>
                        <h1>{successMessage}</h1>                
                    </form>
            </div>
        )
    }
}
export default Connect;