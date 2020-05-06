import React from 'react';
import CarouSel from '../Carousel/Carousel';
import IndexPage from '../IndexPage/IndexPage';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <>
            <CarouSel />
            <IndexPage />
            <About />
            <Contact />
        </>
    )
}

export default Home