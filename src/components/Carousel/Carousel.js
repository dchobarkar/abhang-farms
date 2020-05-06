import React from 'react';

import { Carousel } from 'react-bootstrap';

import './Carousel.css';

const CarouSel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="carouselimg"
                    src={require('../../assests/slide1.JPG')}
                    alt="Slide 1" />
                <Carousel.Caption>
                    <h3>Welcome to अभंग Farms</h3>
                    <p>The heart of perfect farming</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="carouselimg"
                    src={require("../../assests/slide2.JPG")}
                    alt="Slide 2" />
                <Carousel.Caption>
                    <p>Adding green to your life.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="carouselimg"
                    src={require("../../assests/slide3.JPG")}
                    alt="Slide 3" />
                <Carousel.Caption>
                    <p>In nature's lap.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default CarouSel;