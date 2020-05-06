import React, { Component } from 'react';

import { Image } from 'react-bootstrap';

import './Gallery.css';

class Gallery extends Component {
    render() {
        return (
            <div id="gallery" className="row">
                <div className="col-md-4">
                    <Image id="modelimage" src={require("../../assests/gallery1.JPG")} alt="Image" />
                </div>

                <div className="col-md-4">
                    <Image id="modelimage" src={require("../../assests/gallery2.JPG")} alt="Image" />
                </div>

                <div className="col-md-4">
                    <Image id="modelimage" src={require("../../assests/gallery3.JPG")} alt="Image" />
                </div>

                <div className="col-md-4">
                    <Image id="modelimage" src={require("../../assests/gallery4.JPG")} alt="Image" />
                </div>

                <div className="col-md-4">
                    <Image id="modelimage" src={require("../../assests/gallery5.JPG")} alt="Image" />
                </div>

                <div className="col-md-4">
                    <Image id="modelimage" src={require("../../assests/gallery6.JPG")} alt="Image" />
                </div>

                <div className="col-md-4">
                    <Image id="modelimage" src={require("../../assests/gallery7.JPG")} alt="Image" />
                </div>

                <div className="col-md-4">
                    <Image id="modelimage" src={require("../../assests/gallery8.JPG")} alt="Image" />
                </div>

                <div className="col-md-4">
                    <Image id="modelimage" src={require("../../assests/gallery9.JPG")} alt="Image" />
                </div>
            </div>
        )
    }
}

export default Gallery;