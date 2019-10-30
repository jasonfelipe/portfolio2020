import React from 'react';
import './hero.css';
import { FaGithubSquare, FaLinkedin,  } from "react-icons/fa";


const Hero = props => {
    return(
    <div className="hero-image">
        <div className="hero-text">
            <h1>I am Jason Felipe</h1>
            <p>And I'm a {props.job}</p>
            <FaGithubSquare className='icon'/>
            <FaLinkedin className='icon'/>
        </div>

    </div>
    )
}

export default Hero;