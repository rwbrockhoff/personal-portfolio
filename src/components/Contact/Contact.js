import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import axios from 'axios'
import './Contact.scss'

export default class Contact {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  validateEmail = () => {
    //validate email;
  }

  sendEmail = () => {
    const { name, email, message } = this.state;
    const email = { name, email, message }

    axios.post('/api/sendemail', email).then(() => {
      alert('Email sent! Thank you for reaching out to me.')
    })
  }
  render() {
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
              onChange={e => this.setState({ name: e.target.value })} />

            <input type="text"
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })}
              onBlur={this.validateEmail} />

            <textarea placeholder="Message"
              onChange={e => this.setState({ message: e.target.value })} />

            <button>send</button>

          </form>

        </section>
        <Footer />
      </React.Fragment>
    )
  }
}
