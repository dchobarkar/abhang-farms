import React from 'react';

import { Image, Card } from 'react-bootstrap';

import './IndexPage.css';

const IndexPage = () => {
    return (
        <div className="container fullscreen">
            <div id="indexpage" className="row">

                <h2>Welcome to अभंग Farms</h2>

                <div className="col-md-6">
                    <h5>Our smart approach</h5>
                    <ul>
                        <li>Crop grown in Polyhouse.</li>
                        <li>Use of atmosphere automation systems to provide ideal conditions for crop's growth.</li>
                        <li>Limited use of Chemicals.</li>
                        <li>Used only when mandatory Fertilizers.</li>
                    </ul>
                    <p>Amid the climate change consequences disrupting agriculture sector in India,
                        we are trying to face these by implementing latest technologies for farming...</p>
                </div>

                <div className="col-md-6">
                    <Image id="indeximage" src={require("../../assests/indexpage.JPG")} alt="Index Image" rounded />
                </div>
            </div>

            <div id="indexpage" className="row">
                <h2>Our Portfolio</h2>
                <div className="col-lg-4 col-sm-6">
                    <Card>
                        <Card.Img id="cardimage" variant="top" src={require("../../assests/packet.jpg")} alt="Card Image" />
                        <Card.Body>
                            <Card.Text>Get freshly picked yield at your doorsteps.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <Card>
                        <Card.Img id="cardimage" variant="top" src={require("../../assests/planned.jpeg")} alt="Card Image" />
                        <Card.Body>
                            <Card.Text>Planned cultivation adhered to the schedule.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <Card>
                        <Card.Img id="cardimage" variant="top" src={require("../../assests/closed.JPG")} alt="Card Image" />
                        <Card.Body>
                            <Card.Text>Crops grown in enclosed environment free from pests and insects.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default IndexPage;