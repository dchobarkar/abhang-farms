import React, { Component } from 'react';

import { Image } from 'react-bootstrap';

import './Gallery.css';

class Gallery extends Component {
    render() {
        return (
            <div id="gallery" className="fullscreen" >
                <Image id="modelimage" src={require("../../assests/gallery1.JPG")} alt="Image" />

                <Image id="modelimage" src={require("../../assests/gallery2.JPG")} alt="Image" />

                <Image id="modelimage" src={require("../../assests/gallery3.JPG")} alt="Image" />

                <Image id="modelimage" src={require("../../assests/gallery4.JPG")} alt="Image" />

                <Image id="modelimage" src={require("../../assests/gallery5.JPG")} alt="Image" />

                <Image id="modelimage" src={require("../../assests/gallery6.JPG")} alt="Image" />

                <Image id="modelimage" src={require("../../assests/gallery7.JPG")} alt="Image" />

                <Image id="modelimage" src={require("../../assests/gallery8.JPG")} alt="Image" />

                <Image id="modelimage" src={require("../../assests/gallery9.JPG")} alt="Image" />
            </div>
        )
    }
}

export default Gallery;