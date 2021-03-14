import React from 'react';
import { Image } from 'react-bootstrap';

import FadeInSection from '../../containers/FadeInSection/FadeInSection';

import './IndexPage.css';

const IndexPage = () => {
    return (
        <div className="container fullscreen">
            <div id="indexpage" className="row">
                <FadeInSection>
                    <h2>Welcome to अभंग Farms</h2>
                </FadeInSection>
                <div className="col-md-6">
                    <FadeInSection>

                        <h5>Our smart approach</h5>
                        <ul>
                            <li>Crop grown in Polyhouse.</li>
                            <li>Use of atmosphere automation systems to provide ideal conditions for crop's growth.</li>
                            <li>Limited use of Chemicals.</li>
                            <li>Used only when mandatory Fertilizers.</li>
                        </ul>
                        <p>Amid the climate change consequences disrupting agriculture sector in India,
                        we are trying to face these by implementing latest technologies for farming...</p>
                    </FadeInSection>

                </div>

                <div className="col-md-6">
                    <FadeInSection>
                        <Image id="indeximage" src={require("../../assests/indexpage.JPG")} alt="Index Image" rounded />
                    </FadeInSection>
                </div>
            </div>

            <div id="indexpage" className="row">
                <FadeInSection>
                    <h2>Our Portfolio</h2>
                </FadeInSection>
                <div className="col-lg-4 mb-3">
                    <FadeInSection>
                        <a className="hoverfocus">
                            <img
                                src={require('../../assests/packet.jpg')}
                                alt="Card Image"
                                className="img-fluid" />
                            <h3>Get freshly picked yield at your doorsteps.</h3>
                        </a>
                    </FadeInSection>
                </div>

                <div className="col-lg-4 mb-3">
                    <FadeInSection>
                        <a className="hoverfocus">
                            <img
                                src={require('../../assests/planned.jpeg')}
                                alt="Card Image"
                                className="img-fluid" />
                            <h3>Planned cultivation adhered to the schedule.</h3>
                        </a>
                    </FadeInSection>
                </div>

                <div className="col-lg-4 mb-3">
                    <FadeInSection>
                        <a className="hoverfocus">
                            <img
                                src={require('../../assests/closed.JPG')}
                                alt="Card Image"
                                className="img-fluid" />
                            <h3>Crops grown in enclosed environment free from pests and insects.</h3>
                        </a>
                    </FadeInSection>
                </div>
            </div>
        </div>
    )
}

export default IndexPage;