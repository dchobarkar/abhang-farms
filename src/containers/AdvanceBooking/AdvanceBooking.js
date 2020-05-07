import React, { Component } from 'react';
import { Card, CardDeck, Button, Image, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import DModal from '../../components/DModal/DModal';

import './AdvanceBooking.css';

class AdvanceBooking extends Component {
    state = {
        smallpacket: 0,
        mediumpacket: 0,
        onekg: 0,
        twokg: 0,
        total: 0,
        show: false,
        success: false
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    packetHandler = (packet) => {
        if (packet === 'smallpacket') {
            this.setState({
                smallpacket: this.state.smallpacket + 1,
                total: this.state.total + 1
            })
        }
        else if (packet === 'mediumpacket') {
            this.setState({
                mediumpacket: this.state.mediumpacket + 1,
                total: this.state.total + 2
            })
        }
        else if (packet === 'onekg') {
            this.setState({
                onekg: this.state.onekg + 1,
                total: this.state.total + 3
            })
        }
        else if (packet === 'twokg') {
            this.setState({
                twokg: this.state.twokg + 1,
                total: this.state.total + 4
            })
        }
    }

    modalHandler = () => {
        this.setState({
            show: !this.state.show
        })
    }

    successModalHandler = () => {
        this.setState({
            success: !this.state.success
        })
    }

    confirmOrderHandler = (e) => {
        this.modalHandler()
        e.preventDefault();
        const order = {
            Name: this.state.name,
            Mobile_No: this.state.mobile,
            Address: this.state.address,
            Small_Packet: this.state.smallpacket,
            Medium_Packet: this.state.mediumpacket,
            One_Kg: this.state.onekg,
            Two_Kg: this.state.twokg,
            Total: this.state.total,
        }
        axios.post("https://formspree.io/meqrqwzg", order)
            .then(response => {
                this.setState({
                    success: true
                })
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    render() {
        let disable = true;
        disable = this.state.total ? false : true
        return (
            <div className="container fullscreen">
                <div id="capsicumadvertisement" className="row">
                    <div className="col-lg-12">
                        <h3>Health benifits of Capsicum</h3>
                        <div className="divider">
                            <p className="float-left point">Prevents Cancer</p>
                            <p className="float-right point">Gives a healthy heart</p>
                        </div>
                        <div className="divider" >
                            <p className="float-left point">Cures yellow fever</p>
                            <p className="float-right point">Gives glowing skin</p><br />
                        </div>
                        <div className="capsicumimage row">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4">
                                <Image src={require("../../assests/capsicumadvertisement.jpg")} alt="Capsicum Image" roundedCircle />
                            </div>
                            <div className="col-lg-4"></div>
                        </div>
                        <div className="divider">
                            <p className="float-left point">Helps alleviate Crohn's disease</p>
                            <p className="float-right point">Improves overall health</p>
                        </div>
                        <div className="divider">
                            <p className="float-left point">Alleviates menopausal symptoms</p>
                            <p className="float-right point">Reduces arthritic pain</p>
                        </div>
                    </div>
                </div>

                <div id="capsicumvisuals" className="row">
                    <h5>Nutritional facts Per 100 Grams</h5>
                    <div className="col-lg-3">
                        <p className="circle">40</p>
                        <p className="center">Calories</p>
                    </div>
                    <div className="col-lg-3">
                        <p className="circle">0.2 g</p>
                        <p className="center">Total Fat</p>
                    </div>
                    <div className="col-lg-3">
                        <p className="circle">7 mg</p>
                        <p className="center">Sodium</p>
                    </div>
                    <div className="col-lg-3">
                        <p className="circle">340 mg</p>
                        <p className="center">Potassium</p>
                    </div>
                    <div className="col-lg-3">
                        <p className="circle">9 g</p>
                        <p className="center">Total Carbohydrate</p>
                    </div>
                    <div className="col-lg-3">
                        <p className="circle">2 g</p>
                        <p className="center">Protein</p>
                    </div>

                    <h5>Vitamins and Minerals</h5>
                    <div className="col-lg-3">
                        <p className="circle">23 %</p>
                        <p className="center">Vitamin A</p>
                    </div>
                    <div className="col-lg-3">
                        <p className="circle">0.01</p>
                        <p className="center">Calcium</p>
                    </div>
                    <div className="col-lg-3">
                        <p className="circle">404 %</p>
                        <p className="center">Vitamin C</p>
                    </div>
                    <div className="col-lg-3">
                        <p className="circle">6 %</p>
                        <p className="center">Iron</p>
                    </div>
                    <div className="col-lg-3">
                        <p className="circle">15 %</p>
                        <p className="center">Vitamin B-6</p>
                    </div>
                    <div className="col-lg-3">
                        <p className="circle">6 %</p>
                        <p className="center">Magnesuim</p>
                    </div>
                </div>

                <div id="advancebooking" className="row">
                    <h3>Order here</h3>
                    <p><i className="fas fa-truck-loading"></i> Get fresh picked Capsicum from field directly at your doorsteps. </p>

                    <CardDeck>
                        <Card id="advancebookingcard">
                            <Card.Body>
                                <Card.Title>Small packet of 3 Capsicum</Card.Title>
                                <br />
                                <i className="fas fa-box-open"></i>
                                <Card.Text>Rs. 1</Card.Text>
                                {this.state.smallpacket > 0 ? <p>Smallpacket : {this.state.smallpacket}</p> : <><br /><br /></>}
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant="light"
                                    onClick={() => this.packetHandler("smallpacket")}>Add</Button>
                            </Card.Footer>
                        </Card>

                        <Card id="advancebookingcard">
                            <Card.Body>
                                <Card.Title>Medium packet of 6 Capsicum</Card.Title>
                                <br />
                                <i className="fas fa-box-open"></i>
                                <Card.Text>Rs. 2</Card.Text>
                                {this.state.mediumpacket > 0 ? <p>Mediumpacket : {this.state.mediumpacket}</p> : null}
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant="light"
                                    onClick={() => this.packetHandler("mediumpacket")}>Add</Button>
                            </Card.Footer>
                        </Card>

                        <Card id="advancebookingcard">
                            <Card.Body>
                                <Card.Title>1 Kg Packet</Card.Title>
                                <br />
                                <br />
                                <i className="fas fa-box-open"></i>
                                <Card.Text>Rs. 3</Card.Text>
                                {this.state.onekg > 0 ? <p>1 Kg : {this.state.onekg}</p> : null}
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant="light"
                                    onClick={() => this.packetHandler("onekg")}>Add</Button>
                            </Card.Footer>
                        </Card>

                        <Card id="advancebookingcard">
                            <Card.Body>
                                <Card.Title>2 Kg Packet</Card.Title>
                                <br />
                                <br />
                                <i className="fas fa-box-open"></i>
                                <Card.Text>Rs. 4</Card.Text>
                                {this.state.twokg > 0 ? <p>2 Kg : {this.state.twokg}</p> : null}

                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant="light"
                                    onClick={() => this.packetHandler("twokg")}>Add</Button>
                            </Card.Footer>
                        </Card>
                    </CardDeck>

                    <p id="advancebookingtotal">Total : Rs. {this.state.total}</p>
                    <Button
                        disabled={disable}
                        id="advancebookingbutton"
                        variant="outline-dark"
                        onClick={this.modalHandler}>
                        Order
                    </Button>
                </div>

                <DModal
                    show={this.state.show}
                    modalhandler={this.modalHandler}>
                    <div>
                        <p>We need some details before delivering the order.</p>
                        <Form onSubmit={(e) => this.confirmOrderHandler(e)}>
                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Name</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Mobile No.</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        required
                                        title="Mobile no. should be a valid 10 digit number."
                                        pattern="^[0-9]{10}$"
                                        type="text"
                                        placeholder="Mobile No."
                                        name="mobile"
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Address</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        required
                                        as="textarea"
                                        rows="2"
                                        placeholder="Address"
                                        name="address"
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>
                            <Button
                                type="submit"
                                variant="outline-dark"
                                className="float-right">
                                Confirm Order
                                </Button>
                        </Form>

                    </div>
                </DModal>

                <DModal
                    show={this.state.success}
                    modalhandler={this.successModalHandler}>
                    <p className="center">
                        Your order has been recorded.
                    </p>
                    <p className="center">
                        We will contact you soon.
                    </p>
                </DModal>
            </div >
        )
    }
}

export default AdvanceBooking;

