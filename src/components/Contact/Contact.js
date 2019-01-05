import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Contact.scss'

export default function Contact() {
  return (
    <React.Fragment>
      <NavBar />
      <section className="contact-container">

        <div className="contact-text">
          <div className="contact-h2-text">
            <h2>Hello.</h2>
            <h4>I'm excited that you're interested in working with me. Please fill out the contact form, and I'll be in touch within 1-2 business days.</h4>
            <div className="hours-box">
              mon-fri / 9am-5pm
            </div>
          </div>
        </div>

        <form>
          af
        </form>
      </section>
    </React.Fragment>
  )
}
