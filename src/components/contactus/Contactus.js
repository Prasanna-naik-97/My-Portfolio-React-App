import React from 'react'
import './contactus.scss';

const Contactus = () => {
  return (
    <div className="contactus">
        <h3>Want to hire me?</h3>
        <div className="contactus-form">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" autoComplete="off"/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Enter your email" autoComplete="off" />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" maxLength="5000" placeholder="Enter your message"></textarea>
        </div>
        </div>
    </div>
  )
}

export default Contactus
