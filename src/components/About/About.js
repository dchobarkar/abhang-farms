import React from 'react';

import FadeInSection from '../../containers/FadeInSection/FadeInSection';

import './About.css';

const About = () => {
    return (
        <div id="about" className="fullscreen">

            <div id="abouttitle" className="row d-flex align-items-center">
                <FadeInSection>
                    <h2>About अभंग Farms</h2>
                </FadeInSection>
            </div>
            <FadeInSection>
                <p>In India, 10 Farmers commit suicide everyday. We are on a mission to change that.</p>
            </FadeInSection>
        </div>
    )
}


export default About;