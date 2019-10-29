import React from 'react';
import './hero.css';

const Hero = props => {
    return(
    <div className="hero-image">
        <div className="hero-text">
            <h1>I am Jason Felipe</h1>
            <p>And I'm a {props.job}</p>
            <button onClick={props.handleClick}>Contact Me</button>
        </div>
    </div>
    )
}

export default Hero;