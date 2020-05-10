import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import './Carousel.css';

class CarouSel extends Component {
    state = {
        index: 0
    }

    selectHandler = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex
        })
    }

    render() {
        return (
            <Carousel controls={false} indicators={false} interval={3000} id="carousel" activeIndex={this.state.index} onSelect={(e) => this.selectHandler()}>
                <Carousel.Item >
                    <img
                        className="carouselimg"
                        src={require('../../assests/slide1.JPG')}
                        alt="Slide 1" />
                    <Carousel.Caption>
                        <h3>Welcome to अभंग Farms</h3>
                        <p>The heart of perfect farming</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item >
                    <img
                        className="carouselimg"
                        src={require("../../assests/slide2.JPG")}
                        alt="Slide 2" />
                    <Carousel.Caption>
                        <p>Adding green to your life.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item >
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
}

export default CarouSel;
