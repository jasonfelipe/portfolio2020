import React from 'react';
import './hero.css';
import { FaGithubSquare, FaLinkedin,  } from "react-icons/fa";


const Hero = props => {

    const handleLinkClick = event => {
        const { id } = event.target;
        if (id === 'linkedin') window.open('https://www.linkedin.com/in/jason-felipe-089558107/', '_blank');
        else window.open('https://github.com/jasonfelipe', '_blank');
    }

    return(
        <div className="hero-image">
            <div className="hero-text">
                <h1>I am Jason Felipe</h1>
                <p className='hero-subtext'>I'm a {props.job}</p>
                <FaGithubSquare onClick={handleLinkClick} id='github' className='icon'/>
                <FaLinkedin onClick={handleLinkClick} id='linkedin' className='icon'/>
            <h1 className='hero-info'>Scroll Down For Projects!</h1>
            </div>
        </div>
    )
};

export default Hero;