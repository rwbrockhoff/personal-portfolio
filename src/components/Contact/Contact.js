import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import axios from 'axios'
import './Contact.scss'

export default class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
      valid: null
    }
  }

  validateEmail = () => {
    //Regex to validate email onBlur.
    let re = /\S+@\S+\.\S+/;
    const { email } = this.state
    let validEmail = re.test(email);
    //After we set new state, alert user if invalid email provided.
    this.setState({ valid: validEmail }, () => {
      if (!this.state.valid) {
        alert('Please use a valid email.')
      }
    })

  }

  sendEmail = () => {
    const { name, email, message } = this.state;
    //Form is Incomplete
    if (!name.length || !email.length || !message.length) {
      alert('Please fill out the entire form so I can be sure to get in contact with you.')
    }
    //Form is complete and making axios post
    else {
      const emailMessage = { name, email, message }

      axios.post('/api/sendemail', { emailMessage }).then(res => {
        console.log('res: ', res)
        this.setState({ name: '', email: '', message: '' })
        alert('Email sent! Thank you for reaching out to me.')
      })
    }
  }

  render() {
    const validText = this.state.valid === false ? '#E85F5C' : 'black'

    return (
      <React.Fragment>
        <NavBar />
        <section className="contact-container">

          <div className="contact-text">
            <div className="contact-h2-text">
              <h2>Contact Me</h2>
              <h4>You can fill out the form, <a className="inline-link" href="mailto:brockhoffrw@gmail.com">send me an email</a>, or reach out to me on <a className="inline-link" href="https://linkedin.com/in/ryanbrockhoff">LinkedIn</a> to get in touch with me. I look forward to hearing from you! </h4>
            </div>
          </div>

          <form>

            <input
              type="text" autoFocus
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })} />

            <input type="text"
              style={{ color: validText }}
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              onBlur={this.validateEmail} />

            <textarea placeholder="Message"
              value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })} />

            <button
              onClick={this.sendEmail}>send</button>

          </form>

        </section>
        <Footer />
      </React.Fragment>
    )
  }
}
