import React from 'react';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AdvanceBooking from '../../containers/AdvanceBooking/AdvanceBooking';
import Gallery from '../../containers/Gallery/Gallery';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';

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