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
            <h2>Hello.</h2>
            <h4>I'm excited that you're interested in working with me. Please fill out the contact form, and I'll be in touch within 1-2 &nbsp; business days.</h4>
            <div className="hours-box">
              mon-fri / 9am-5pm
            </div>
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
