import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './Contact.scss'

export default function Contact() {
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
            placeholder="Name" />

          <input type="text"
            placeholder="Email" />

          <textarea placeholder="Message" />

          <button>send</button>

        </form>

      </section>
      <Footer />
    </React.Fragment>
  )
}
