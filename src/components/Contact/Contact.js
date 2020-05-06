import React from 'react';

import './Contact.css';

const Contact = () => {
    return (
        <div className="container">
            <div id="contact" className="row">
                <h2>Contact Us</h2>
                <div className="col-lg-8 mb-4">
                    <iframe title="location" width="100%" height="300px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=pangri&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>

                <div className="col-lg-4 mb-4">
                    <p>Address should be here.</p>
                    <p>Mobile: 9421336699</p>
                    <p>Email : dchobarkar@gmail.com</p>
                </div>
            </div>
        </div >
    )
}

export default Contact;