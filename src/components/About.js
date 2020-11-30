import React from 'react';
import '../css/About.css';

const AboutComponent = (props) => {
    return(
        <div className="about-page">
            <div className="about-title">
                <h1><strong>About</strong></h1>
            </div>
            <hr />
            <div className="about-content">
                The sample about page.
            </div>
        </div>
    );
}

export default AboutComponent;