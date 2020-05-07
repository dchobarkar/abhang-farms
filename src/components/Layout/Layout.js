import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../Navbar/Navbar';

import Home from '../Home/Home';
import Gallery from '../../containers/Gallery/Gallery';
import AdvanceBooking from '../../containers/AdvanceBooking/AdvanceBooking';

import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Route path="/" exact component={Home} />
            <Route path="/advancebooking" exact component={AdvanceBooking} />
            <Route path="/gallery" exact component={Gallery} />
            <Footer />
        </div>
    )
}

export default Layout;