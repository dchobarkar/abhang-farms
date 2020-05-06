import React, { Component } from 'react';

import { Card, CardDeck, Button } from 'react-bootstrap';

import './AdvanceBooking.css';

class AdvanceBooking extends Component {
    state = {
        smallpacket: 0,
        mediumpacket: 0,
        onekg: 0,
        twokg: 0,
        total: 0
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

    render() {
        return (
            <div className="container">
                <div className="row">
                    <CardDeck>
                        <Card id="advancebookingcard">
                            <Card.Body>
                                <Card.Title>Small packet of 3 Capsicum</Card.Title>
                                <br />
                                <i className="fas fa-box-open"></i>
                                <Card.Text>Rs. 1</Card.Text>
                                {this.state.smallpacket > 0 ? <p>Smallpacket : {this.state.smallpacket}</p> : null}
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
                </div>
            </div >
        )
    }
}

export default AdvanceBooking;