import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter, NavLink } from 'react-router-dom';

import "./Navbar.css";

class NavBar extends Component {
    state = {
        isTop: true
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 200;
            if (isTop !== this.state.isTop) {
                this.setState({
                    isTop
                })
            }
        })
    }

    nextPage = (path) => {
        this.props.history.push(path)
    }

    render() {
        return (
            <Navbar collapseOnSelect id="abhangfarmsnavbar" className={this.state.isTop ? 'navbarup' : 'navbardown'} expand="md">
                <Navbar.Brand>
                    <NavLink className="nav-link" to="/">
                        अभंग Farms
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link onClick={() => this.nextPage("/")} href="#1" className="nav-link">Home</Nav.Link>
                        <Nav.Link onClick={() => this.nextPage("/gallery")} href="#2" className="nav-link">Gallery</Nav.Link>
                        <Nav.Link onClick={() => this.nextPage("/advancebooking")} href="#3" className="nav-link">Advance Booking</Nav.Link>
                        <Nav.Link onClick={() => this.nextPage("/")} href="#about" className="nav-link">About</Nav.Link>
                        <Nav.Link onClick={() => this.nextPage("/")} href="#contact" className="nav-link">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}

export default withRouter(NavBar);