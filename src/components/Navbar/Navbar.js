import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter, NavLink } from 'react-router-dom';

import "./Navbar.css";

class NavBar extends Component {
    nextPage = (path) => {
        this.props.history.push(path)
    }
    render() {
        return (
            <Navbar collapseOnSelect id="abhangfarmsnavbar" expand="md">
                <Navbar.Brand>
                    <NavLink className="nav-link" to="/">
                        अभंग Farms
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link onClick={() => this.nextPage("/")} className="nav-link">Home</Nav.Link>
                        <Nav.Link onClick={() => this.nextPage("/gallery")} className="nav-link">Gallery</Nav.Link>
                        <Nav.Link onClick={() => this.nextPage("/advancebooking")}>Advance Booking</Nav.Link>
                        <Nav.Link onClick={() => this.nextPage("/")} href="#about">About</Nav.Link>
                        <Nav.Link onClick={() => this.nextPage("/")} href="#contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >

        )
    }
}
export default withRouter(NavBar);