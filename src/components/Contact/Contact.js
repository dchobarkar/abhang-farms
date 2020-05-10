import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';

import FadeInSection from '../../containers/FadeInSection/FadeInSection';

import DModal from '../DModal/DModal';

import './Contact.css';

class Contact extends Component {
    state = {
        formsubmitted: false,
        email: '',
        subject: '',
        message: ''
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showModalHandler = () => {
        this.setState({
            formsubmitted: !this.state.formsubmitted
        })
    }

    mailSubmitHandler = (e) => {
        e.preventDefault();
        const Query = {
            Email: this.state.email,
            Subject: this.state.subject,
            Message: this.state.message
        }
        axios.post("https://formspree.io/mnqgqygy", Query)
            .then(response => {
                this.setState({
                    formsubmitted: true,
                    email: '',
                    subject: '',
                    message: ''
                })
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    render() {
        return (
            <div id="contact" className="container fullscreen">
                <FadeInSection>
                    <h2>Contact Us</h2>
                </FadeInSection>

                <div className="row d-flex align-items-center">

                    <div className="col-lg-4 mb-4">
                        <FadeInSection>
                            <p><i className="fas fa-map-marker-alt"></i> Address: should be here.</p>
                            <p><i className="fas fa-mobile-alt"></i> Mobile: 9421336699</p>
                            <p><i className="far fa-paper-plane"></i> Email: dchobarkar@gmail.com</p>
                        </FadeInSection>
                    </div>

                    <div className="col-lg-8 mb-4">
                        <FadeInSection>
                            <iframe title="location" width="100%" height="300px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=pangri&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
                        </FadeInSection>
                    </div>
                </div>

                <div id="contactform" className="row">
                    <div className="col-lg-2"></div>

                    <div className="col-lg-8">
                        <FadeInSection>
                            <Form onSubmit={(e) => this.mailSubmitHandler(e)}>
                                <Form.Group as={Row} className="inputfield">
                                    <Form.Label column sm={2}>Email</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            required
                                            title="Email should be valid."
                                            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                                            type="email"
                                            placeholder="Your Email"
                                            value={this.state.email}
                                            name="email"
                                            onChange={this.inputChangeHandler} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="inputfield">
                                    <Form.Label column sm={2}>Subject</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Subject"
                                            value={this.state.subject}
                                            name="subject"
                                            onChange={this.inputChangeHandler} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="inputfield">
                                    <Form.Label column sm={2}>Message</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            required
                                            as="textarea"
                                            rows="5"
                                            placeholder="Message"
                                            value={this.state.message}
                                            name="message"
                                            onChange={this.inputChangeHandler} />
                                    </Col>
                                </Form.Group>

                                <Button
                                    className="float-right"
                                    variant="outline-dark"
                                    type="submit">
                                    <i className="far fa-envelope"></i> Send
                            </Button>
                            </Form>
                        </FadeInSection>
                        <DModal
                            show={this.state.formsubmitted}
                            modalhandler={this.showModalHandler}>
                            <p className="center">Thank you for your message.</p>
                            <p className="center">We will get in touch shortly.</p>
                        </DModal>

                    </div>
                    <div className="col-lg-2"></div>

                </div>
            </div >

        )
    }
}

export default Contact;
